import { useParams } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { fetchByIdReviews } from "../../articles-api";
import { useFetchData } from "../../useFetchData";
import css from "./MovieReviews.module.css";

export default function MovieReviews() {
  const { movieId } = useParams();

  const { data, isLoad, error } = useFetchData(fetchByIdReviews, movieId);

  return (
    <>
      <ul className={css.list}>
        {isLoad && (
          <div>
            <ThreeDots color="#cc5801" />
          </div>
        )}
        {data?.results.length ? (
          data?.results.map((review) => {
            return (
              <li key={review.id} className={css.item}>
                <p>
                  Author: <span className={css.author}>{review.author}</span>
                </p>
                <p>{review.content}</p>
              </li>
            );
          })
        ) : (
          <li>
            <p>Sorry we don`t have reviews for htis movie</p>
          </li>
        )}
      </ul>
      {error && <div>Sorry Erorr😔</div>}
    </>
  );
}

