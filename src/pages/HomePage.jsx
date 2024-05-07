import { ThreeDots } from "react-loader-spinner";
import { useGetFilms } from "../useGetFilms";
import MovieList from "../components/MovieList/MovieList";

export default function HomePage() {
  const { film, isLoad, error } = useGetFilms();
  return (
    <div>
      <h1>HomePage</h1>
      <h2>Trending movies</h2>
      <MovieList movie={film} />
      {isLoad && (
        <div>
          <ThreeDots color="#cc5801" />
        </div>
      )}
      {error && <div>Ops Error😔 Please try again!</div>}
    </div>
  );
}
