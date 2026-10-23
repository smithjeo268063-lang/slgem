"use client";

import { useEffect, useState } from "react";
import { apiGet } from "./api";

export function useApiData<T>(path: string, transform?: (data: T) => T) {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let active = true;

    apiGet<T>(path)
      .then((result) => {
        if (active) setData(transform ? transform(result) : result);
      })
      .catch((requestError: unknown) => {
        if (active) {
          setError(
            requestError instanceof Error
              ? requestError.message
              : "Unable to load this content.",
          );
        }
      })
      .finally(() => {
        if (active) setIsLoading(false);
      });

    return () => {
      active = false;
    };
  }, [path, transform]);

  return { data, error, isLoading };
}
