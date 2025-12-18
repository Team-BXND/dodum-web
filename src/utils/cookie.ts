import Cookie from "js-cookie"

export const getCookie = (name: string): string | null => {
  return Cookie.get(name) ?? null
};

export const deleteCookie = (name: string) => {
  Cookie.remove(name);
};

export const setAccessToken = (token: string) => {
  if (!token || token === 'undefined') return;
  Cookie.set("accessToken", token, {expires: 15 / (24 * 60), secure: true, sameSite: 'strict', path: '/'}) // 15분 뒤 만료
}

export const setRefreshToken = (token: string) => {
  if (!token || token === 'undefined') return;
  Cookie.set("refreshToken", token, {expires: 7, secure: true, sameSite: 'strict', path: '/'}) // 7일 뒤 만료
}

export const setUsername = (username: string) => {
  if (!username || username === 'undefined') return;
  Cookie.set("username", username, {expires: 7, secure: true, sameSite: 'strict', path: '/'})
}