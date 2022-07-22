import { Auth0Provider } from "@auth0/auth0-react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router } from "react-router-dom";
import type { ApplicationProvidersProps } from "./types";

const queryClient = new QueryClient();

export const ApplicationProviders = ({
  children,
}: ApplicationProvidersProps) => {
  return (
    <Router>
      <Auth0Provider
        domain={process.env.REACT_APP_AUTH0_DOMAIN!}
        clientId={process.env.REACT_APP_AUTH0_CLIENT_ID!}
        redirectUri={window.location.origin}
        audience={process.env.REACT_APP_AUTH0_AUDIENCE!}
        scope={process.env.REACT_APP_AUTH0_SCOPE!}
      >
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </Auth0Provider>
    </Router>
  );
};
