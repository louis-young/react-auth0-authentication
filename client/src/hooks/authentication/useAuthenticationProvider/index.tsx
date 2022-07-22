import { useAuth0 } from "@auth0/auth0-react";

export const useAuthenticationProvider = () => {
  const {
    isLoading,
    isAuthenticated,
    user,
    loginWithPopup,
    logout,
    getAccessTokenSilently,
  } = useAuth0();

  return {
    isAuthenticating: isLoading,
    isAuthenticated,
    user,
    logIn: loginWithPopup,
    logOut: logout,
    getAccessToken: getAccessTokenSilently,
  };
};
