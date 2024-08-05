import request from "./request";

const BASE_URL = "http://localhost:3030/users";

export const login = async (email, password) => {
  const authData = await request.post(`${BASE_URL}/login`, {
    email,
    password,
  });
  return authData;
};

export const register = async (email, password) => {
  const authData = await request.post(`${BASE_URL}/register`, {
    email,
    password,
  });
  return authData;
};

export const logout = async () => {
  request.get(`${BASE_URL}/logout`);
};
