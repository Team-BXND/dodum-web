import axios from "axios";

const VITE_SERVER_URL = import.meta.env.VITE_SERVER_ADDRESS as string;

export const api = axios.create({
  baseURL: VITE_SERVER_URL,
  withCredentials: true, 
});

api.interceptors.request.use((config) => {
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);