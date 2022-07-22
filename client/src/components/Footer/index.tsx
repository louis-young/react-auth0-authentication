import { Container } from "../Container";
import { Logo } from "../Logo";

export const Footer = () => {
  return (
    <footer className="p-6 bg-gray-100 border-gray-200 border-t">
      <Container>
        <Logo />
      </Container>
    </footer>
  );
};
