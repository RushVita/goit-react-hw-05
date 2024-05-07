import { useEffect, useState } from "react";
import { fetchTrendingmovies } from "./articles-api";

export function useGetFilms() {
  const [film, setFilm] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoad(true);
        const data = await fetchTrendingmovies();
        setFilm(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoad(false);
      }
    })();
  }, []);
  return { film, isLoad, error };
}
