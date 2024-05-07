import { useEffect, useState } from "react";

export function useFetchData(foo, pathParams = "") {
  const [data, setData] = useState(null);
  const [isLoad, setIsLoad] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        if (pathParams === "") return;

        setIsLoad(true);
        const res = await foo(pathParams);

        setData(res);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoad(false);
      }
    })();
  }, [foo, pathParams]);

  return { data, isLoad, error };
}
