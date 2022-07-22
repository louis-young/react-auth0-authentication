export const get = async <TRequestResponse>(
  endpoint: string,
  bearerToken: string,
) => {
  const response = await fetch(endpoint, {
    headers: {
      Authorization: `Bearer ${bearerToken}`,
    },
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data: TRequestResponse = await response.json();

  return data;
};
