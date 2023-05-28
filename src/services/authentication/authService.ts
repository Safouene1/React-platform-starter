import { authapi } from './apiconfig';

export interface LoginResponse {
  accessToken: string;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export const login = async (
  credentials: LoginCredentials
): Promise<LoginResponse> => {
  try {
    const response = await authapi.post<LoginResponse>('login', credentials);
    return response.data;
  } catch (error) {
    throw new Error('Login failed.');
  }
};
