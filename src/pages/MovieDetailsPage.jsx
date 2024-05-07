import { useParams, Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import css from "./MovieDetailsPage.module.css"; 
import { fetchByIdDetails } from "../articles-api";
import { useFetchData } from "../useFetchData";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const { data, isLoad, error } = useFetchData(fetchByIdDetails, movieId);

  return (
    <div>
      <h1>MovieDetailsPage</h1>
      <button
        onClick={() => {
          navigate(-1);
        }}
        className={css.btn_back}
      >
        Go Back
      </button>

      {data !== null && (
        <div>
          <img src={`https://image.tmdb.org/t/p/w300/${data.backdrop_path}`} alt="" />
          <h2>{data.title}</h2>
          <p>
            <span className={css.title_desc}>Release Date:</span> {data.release_date}
          </p>
          <p>
            <span className={css.title_desc}>Overview:</span> <br /> {data.overview}
          </p>
          <p>
            <span className={css.title_desc}>Rating:</span> {data.vote_average}
          </p>
          <p>
            <span className={css.title_desc}>Genres: </span>
            {data.genres.map((item) => (
              <span key={item.id}>{item.name} </span>
            ))}
          </p>
        </div>
      )}

      {isLoad && (
        <div>
          <ThreeDots color="#cc5801" />
        </div>
      )}

      {error && <div>Ops Error😔 Please try again!</div>}

      <div className={css.wrapLink}>
        <Link to={"cast"} state={location}>
          Cast
        </Link>
        <Link to={"reviews"} state={location}>
          Reviews
        </Link>
      </div>
      <Outlet />
    </div>
  );
}
