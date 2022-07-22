import { PageLayout } from "../../components/PageLayout";
import { useTestQuery } from "../../hooks/queries/useTestQuery";

export const TestPage = () => {
  const { testStatus, testData } = useTestQuery();

  return (
    <PageLayout
      title="Test"
      isLoading={testStatus === "loading"}
      hasError={testStatus === "error"}
    >
      <pre>{JSON.stringify(testData, null, 2)}</pre>
    </PageLayout>
  );
};
