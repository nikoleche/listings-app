import { useContext } from "react";

import { login, register } from "../api/authAPI";
import { AuthContext } from "../contexts/authContext";

export function useLogin() {
  const { updateAuthState } = useContext(AuthContext);

  async function loginHandler(email, password) {
    const result = await login(email, password);
    updateAuthState(result);
  }
  return loginHandler;
}

export function useRegister() {
  const { updateAuthState } = useContext(AuthContext);

  async function registerHandler(email, password) {
    const { password: _, ...authData } = await register(email, password);
    updateAuthState(authData);
  }
  return registerHandler;
}
