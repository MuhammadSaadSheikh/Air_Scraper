export const objectToQueryParams = (obj: Record<string, any>): string => {
  return Object.keys(obj)
    .reduce((acc: string[], key: string) => {
      if (obj[key]) {
        acc.push(`${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`);
      }
      return acc;
    }, [])
    .join('&');
};
