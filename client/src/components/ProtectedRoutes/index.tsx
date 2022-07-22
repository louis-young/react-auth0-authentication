import { Navigate, Outlet, useLocation } from "react-router-dom";
import { pagePaths } from "../../constants/pages/paths";
import { useAuthenticationProvider } from "../../hooks/authentication/useAuthenticationProvider";
import { PageLoading } from "../PageLoading";

export const ProtectedRoutes = () => {
  const { isAuthenticating, isAuthenticated } = useAuthenticationProvider();

  const location = useLocation();

  if (isAuthenticating) {
    return <PageLoading />;
  }

  if (!isAuthenticated) {
    return <Navigate to={pagePaths.homePage} state={{ from: location }} />;
  }

  return <Outlet />;
};
