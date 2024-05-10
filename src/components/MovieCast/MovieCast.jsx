import { useParams } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { fetchByIdCredits } from "../../articles-api";
import { useFetchData } from "../../useFetchData";
import css from "./MovieCast.module.css";

export default function MovieCast() {
  const { movieId } = useParams();

  const { data, isLoad, error } = useFetchData(fetchByIdCredits, movieId);

  return (
    <ul className={css.wraper}>
      {isLoad && (
        <div>
          <ThreeDots color="#cc5801" />
        </div>
      )}
      {data?.cast &&
        data?.cast.map((item) => {
          return (
            <li className={css.item_wrap} key={item.cast_id}>
              <img src={`https://image.tmdb.org/t/p/w200/${item.profile_path}`} alt="" />
              <p>{item.original_name}</p>
            </li>
          );
        })}
      {error && <div>Sorry Erorr😔</div>}
    </ul>
  );
}
