import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext({
  userId: "",
  email: "",
  accessToken: "",
  isAuthenticated: false,
  updateAuthState: (authState = {}) => null,
  logout: () => null,
});

export function AuthContextProvider(props) {
  const [authState, setAuthSTate] = useState({});

  function updateAuthState(state) {
    setAuthSTate(state);
  }

  const logout = () => {
    useEffect(() => {
      setAuthSTate(null);
      // localStorage.removeItem("accessToken");
    }, []);
  };

  const contextData = {
    userId: authState?._id,
    email: authState?.email,
    accessToken: authState?.accessToken,
    isAuthenticated: !!authState?.email,
    updateAuthState,
    logout,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {props.children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const authData = useContext(AuthContext);
  return authData;
}
