import { login, logout, register } from "../api/authAPI";
import { useAuthContext } from "../contexts/AuthContext";

export function useLogin() {
  const { updateAuthState } = useAuthContext();

  async function loginHandler(email, password) {
    const result = await login(email, password);
    localStorage.setItem("accessToken", result.accessToken);
    updateAuthState(result);
  }
  return loginHandler;
}

export function useRegister() {
  const { updateAuthState } = useAuthContext();

  async function registerHandler(email, password) {
    const { password: _, ...authData } = await register(email, password);
    localStorage.setItem("accessToken", authData.accessToken);
    console.log(authData);

    updateAuthState(authData);
  }
  return registerHandler;
}

export function useLogout() {
  const { logout: localLogout } = useAuthContext();

  async function logoutHandler() {
    localLogout();
    await logout();
  }
  return logoutHandler;
}
