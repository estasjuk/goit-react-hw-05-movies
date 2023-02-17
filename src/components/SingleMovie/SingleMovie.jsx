import { useState, useEffect } from 'react';
import {
  useParams,
  useNavigate,
  Link,
  Outlet,
  useLocation,
} from 'react-router-dom';

import Loader from 'shared/components/Loader/Loader';
import { getMovieDetails } from 'shared/services/movies-api';
import { getGenresList } from 'shared/services/getGenresList';

import css from './SingleMovie.module.css';

const SingleMovie = () => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from || '/';

  useEffect(() => {
    setLoading(true);
    const fetchMovieDetails = async () => {
      try {
        const data = await getMovieDetails(movieId);
        //console.log(data);
        setMovie({ ...data });
      } catch ({ response }) {
        setError(response.data.message);
        alert(response.data.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieDetails();
    //console.log(fetchMovieDetails());
    //console.log(getMovieDetails(movieId));
  }, [movieId]);

  const { poster_path, genres, title, release_date, overview } = movie;

  return (
    <div className={css.Wrapper}>
      {loading && <Loader />}
      <button className={css.GoBackBtn} onClick={() => navigate(from)}>
        Go back
      </button>
      <div className={css.MovieCard}>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : 'https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-'
          }
          alt={movie.title}
          width="300"
          loading="lazy"
        />
        <div>
          <h1 className={css.title}>
            {title} ({release_date})
          </h1>
          <h3 className={css.title}>Overview:</h3>
          <p>{overview}</p>
          <h3 className={css.title}>Genres:</h3>
          {genres.length !== 0 && <p>{getGenresList(genres)}</p>}
        </div>
      </div>
      <h3 className={css.title}>Additional information:</h3>
      <div className={css.AddInfo}>
        <Link className={css.AddInfoLink} to="cast" state={{ from }}>
          Cast
        </Link>
        <Link className={css.AddInfoLink} to="reviews" state={{ from }}>
          Reviews
        </Link>
      </div>
      <Outlet />
      {error && <p>Something goes wrong...</p>}
    </div>
  );
};

export default SingleMovie;
