import axios from "axios";

const VITE_SERVER_URL = import.meta.env.VITE_SERVER_URL as string;

export const api = axios.create({
  baseURL: VITE_SERVER_URL,
  withCredentials: true, 
});

api.interceptors.response.use(
  res => res,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = localStorage.getItem("refreshToken");
      const username = localStorage.getItem("username");

      try {
        const response = await api.post("/auth/refresh", {
          username,
          refreshToken
        });
        const newAccessToken = response.data.accessToken;

        localStorage.setItem("token", newAccessToken);

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);