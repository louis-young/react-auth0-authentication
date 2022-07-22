import { useAuthenticationProvider } from "../../hooks/authentication/useAuthenticationProvider";
import { Button } from "../Button";
import { Container } from "../Container";
import { LoadingSpinner } from "../LoadingSpinner";
import { Logo } from "../Logo";
import { Navigation } from "../Navigation";
import { UserMenu } from "../UserMenu";

export const Header = () => {
  const { isAuthenticating, isAuthenticated, user, logOut, logIn } =
    useAuthenticationProvider();

  return (
    <header className="p-6 bg-gray-100 border-gray-200 border-b">
      <Container>
        <div className="flex gap-4 justify-between items-center">
          <div className="flex gap-12 justify-between items-center">
            <Logo />

            <Navigation />
          </div>

          {isAuthenticating ? (
            <LoadingSpinner size={40} />
          ) : isAuthenticated ? (
            user &&
            user.picture &&
            user.email && (
              <UserMenu
                profilePictureUrl={user.picture}
                emailAddress={user.email}
                onLogOutButtonClick={logOut}
              />
            )
          ) : (
            <Button onClick={logIn}>Log In</Button>
          )}
        </div>
      </Container>
    </header>
  );
};
