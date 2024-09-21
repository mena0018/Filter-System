export const useURLParams = <T extends Record<string, unknown>>(queryStrings: string): T => {
  const query = new URLSearchParams(queryStrings);
  const results: Record<string, unknown> = {};

  query.forEach((value: string, key: string) => {
    results[key] = value;
  });

  return results as T;
};
