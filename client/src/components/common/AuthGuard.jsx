import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

export default function AuthGuard() {
  const { isAuthenticated } = useAuthContext();
  console.log(isAuthenticated);

  return isAuthenticated ? <Navigate to="/" /> : <Outlet />;
}
