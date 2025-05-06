import { useEffect, useState } from "react";

type FetchState<T> = {
  data: T | null;
  error: string | null;
  isLoading: boolean;
};

export function useFetch<T>(url: string): FetchState<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    let isMounted = true;

    setIsLoading(true);

    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        if (isMounted) {
          setData(json);
          setError(null);
        }
      })
      .catch((error) => {
        if (isMounted) setError(error);
      })
      .finally(() => {
        if (isMounted) setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, error, isLoading };
}
