import { createSlice, createAction, createAsyncThunk } from '@reduxjs/toolkit';
import {
  login,
  LoginCredentials,
  LoginResponse,
} from '../../services/authentication/loginService';

interface AuthState {
  token: LoginResponse | null;
  loading: boolean;
  error: string | null;

  authenticated: boolean;
}

const initialState: AuthState = {
  token: null,
  loading: false,
  error: null,
  authenticated: false,
};

export const logout = createAction('auth/logout');

export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials: LoginCredentials) => {
    return await login(credentials);
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload;
        state.authenticated = true;
        localStorage.setItem('user', JSON.stringify(action.payload));
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Login failed.';
      })
      .addCase(logout, (state) => {
        state.token = null;
        state.authenticated = false;
        localStorage.removeItem('user');
      });
  },
});
export const { clearError } = userSlice.actions;
export default userSlice;
