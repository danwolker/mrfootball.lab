import axios from "axios";

const LOGIN_URL = "http://127.0.0.1:8000/api/token/";
const REFRESH_URL = "http://127.0.0.1:8000/api/token/refresh";
const LOGOUT_URL = "http://127.0.0.1:8000/api/logout/";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  withCredentials: true,
});

export const login = async (username: string, password: string) => {
  const response = await api.post(
    'token',
    { username: username, password: password },
    
  );
  return response.data.success;
};

export const refresh_token = async () => {
  const response = await axios.post(REFRESH_URL, {}, { withCredentials: true });
  return response.data.refreshed;
};

export const logout = async () => {
  try {
    await api.post('logout');
    return true;
  } catch (error) {
    return false;
  }
};
