import Cookie from 'js-cookie';

export const getCookie = (name: string): string | null => {
  return Cookie.get(name) ?? null;
};

export const deleteCookie = (name: string) => {
  Cookie.remove(name);
};

export const setAccessToken = (token: string) => {
  if (!token || token === 'undefined') return;
  Cookie.set('accessToken', token, {
    expires: 15 / (24 * 60),
    secure: true,
    sameSite: 'strict',
    path: '/',
  }); // 15분 뒤 만료
};

export const setRefreshToken = (token: string) => {
  if (!token || token === 'undefined') return;
  Cookie.set('refreshToken', token, {
    expires: 7,
    secure: true,
    sameSite: 'strict',
    path: '/',
  }); // 7일 뒤 만료
};

export const setUsername = (username: string) => {
  if (!username || username === 'undefined') return;
  Cookie.set('username', username, {
    expires: 7,
    secure: true,
    sameSite: 'strict',
    path: '/',
  });
};

interface TokenPayload {
  sub?: string;
  username?: string;
  role?: string;
  iat?: number;
  exp?: number;
}

export const getAccessTokenPayload = (): TokenPayload | null => {
  const token = getCookie('accessToken');
  if (!token) return null;

  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');

    // 한글 깨짐 방지 디코딩 로직
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    return JSON.parse(jsonPayload);
  } catch (error) {
    return null;
  }
};

export const getUserRole = (): string | null => {
  const payload = getAccessTokenPayload();
  return payload?.role || null;
};
