import { login, register } from "../api/authAPI";

export function useLogin() {
  async function loginHandler(email, password) {
    await login(email, password);
  }
  return loginHandler;
}

export function useRegister() {
  async function registerHandler(email, password) {
    await register(email, password);
  }
  return registerHandler;
}
