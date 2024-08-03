import { login } from "../api/authAPI";

export function useLogin() {
  async function loginHandler(email, password) {
    const result = await login(email, password);
  }
  return loginHandler;
}
