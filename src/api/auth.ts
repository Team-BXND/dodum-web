import { deleteCookie, getCookie, setAccessToken } from "@/utils/cookie";
import { publicInstance } from "./axiosInstance";

export function tokenRefresh() {
  const refreshToken = getCookie("refreshToken")
  const username = getCookie("username")

  if (refreshToken && username) {
    publicInstance.post(`/auth/refresh`, {
      username: username,
      refreshToken: refreshToken
    })
    .then((response) => {
      const newToken = response.data
      setAccessToken(newToken)
      return newToken
    })
    .catch((error) => {
      alert(error.response.message)
      logout()
    })
  }

  return false;
}

export function isLoggedIn() {
  const accessToken = getCookie("accessToken")
  const refreshToken = getCookie("refreshToken")

  if (accessToken) {
    return true;
  } else {
    if (refreshToken) {
      tokenRefresh();
      return true;
    } else {
    return false;}
  }
}

export function logout() {
  deleteCookie("accessToken");
  deleteCookie("refreshToken");
  deleteCookie("username");
  window.location.replace('/login')
}