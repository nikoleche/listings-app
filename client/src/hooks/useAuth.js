import { login } from "../api/authAPI";

export function useLogin() {
  async function loginHandler(email, password) {
    await login(email, password);
  }
  return loginHandler;
}
