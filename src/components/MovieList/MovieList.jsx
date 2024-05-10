import { Link, useLocation } from "react-router-dom";

export default function MovieList({ movie }) {
  const location = useLocation();

  return (
    <ul>
      {movie.map((item) => {
        return (
          <li key={item.id}>
            <Link state={location} to={`/movies/${item.id}`}>
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
