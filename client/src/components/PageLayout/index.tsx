import { Container } from "../Container";
import { PageLoading } from "../PageLoading";
import { Spacer } from "../Spacer";
import type { PageLayoutProps } from "./types";

export const PageLayout = ({
  title,
  isLoading = false,
  hasError = false,
  children,
}: PageLayoutProps) => {
  return (
    <section className="py-12">
      <Container>
        <h1 className="font-bold text-4xl text-gray-900">{title}</h1>

        <Spacer size="large" />

        {isLoading ? (
          <PageLoading />
        ) : hasError ? (
          <h2>Something went wrong. Please try again.</h2>
        ) : (
          children
        )}
      </Container>
    </section>
  );
};
