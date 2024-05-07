import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useThrottle } from "@uidotdev/usehooks";
import { ThreeDots } from "react-loader-spinner";
import { fetchSearch } from "../articles-api";

import MovieList from "../components/MovieList/MovieList";
import { useFetchData } from "../useFetchData";

export default function MoviesPage() {
  const [inputValue, setInputValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const throttledValue = useThrottle(inputValue, 300);
  const getValue = searchParams.get("query");

  const { data, isLoad, error } = useFetchData(fetchSearch, throttledValue);

  useEffect(() => {
    if (!getValue) return;

    setInputValue(getValue);
  }, [getValue]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue === "") return;

    setSearchParams({ query: inputValue });
  };

  return (
    <div>
      <h1>MoviesPage</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            setSearchParams({ query: e.target.value });
          }}
        />
        <button>Мені не подобається ідея використання пошуку при Cабміті😊</button>
      </form>
      {data && <MovieList movie={data.results} />}
      {isLoad && (
        <div>
          <ThreeDots color="#cc5801" />
        </div>
      )}
      {error && <div>Ops Error😔 Please try again!</div>}
    </div>
  );
}
