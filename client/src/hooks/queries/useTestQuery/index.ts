import { useQuery } from "react-query";
import { get } from "../../../utilities/http";
import { getTestQueryKey } from "../../../utilities/queryKeys";
import { buildEntireUrl } from "../../../utilities/url";
import { useAuthenticationProvider } from "../../authentication/useAuthenticationProvider";
import type { TestResponse } from "./types";

export const useTestQuery = () => {
  const { getAccessToken } = useAuthenticationProvider();

  const endpoint = buildEntireUrl("/test");

  const queryKey = getTestQueryKey();

  const query = useQuery(queryKey, async () => {
    const accessToken = await getAccessToken({
      audience: process.env.REACT_APP_AUTH0_AUDIENCE!,
      scope: process.env.REACT_APP_AUTH0_SCOPE!,
    });

    return get<TestResponse>(endpoint, accessToken);
  });

  const {
    status: testStatus,
    error: testError,
    data: testData,
    ...additionalQueryProperties
  } = query;

  return { testStatus, testError, testData, ...additionalQueryProperties };
};
