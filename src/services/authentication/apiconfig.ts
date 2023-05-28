import axios from 'axios';

const API_BASE_URL = 'https://reqres.in/api';

export const authapi = axios.create({
  baseURL: API_BASE_URL,
});
