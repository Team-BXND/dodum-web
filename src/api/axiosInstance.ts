import { getCookie } from "@/utils/cookie";
import axios from "axios";
import { logout, tokenRefresh } from "./auth";

export const publicInstance = axios.create({ //로그인 등 토큰 필요 없는 경우
  baseURL: import.meta.env.VITE_SERVER_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const privateInstance = axios.create({ //토큰을 헤더에 포함해야하는 경우
  baseURL: import.meta.env.VITE_SERVER_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  }
})

privateInstance.interceptors.request.use(
  (config) => {
    config.withCredentials = true;
    if (config.url && (config.url.includes("/login") || config.url.includes("/register"))) {
      return config;
    }

    const accessToken = getCookie("accessToken");
    const refreshToken = getCookie("refreshToken");
    const userId = getCookie("username")

    if(accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    } else { 
      if(refreshToken && userId) {
        const newToken = tokenRefresh();

        if(newToken) {
          config.headers["Authorization"] = `Bearer ${newToken}`;
        }
      } 
      else {
        logout();
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);