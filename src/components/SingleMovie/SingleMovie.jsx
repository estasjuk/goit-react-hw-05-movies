import { useState, useEffect } from 'react';
import {
  useParams,
  useNavigate,
  Link,
  Outlet,
  useLocation,
} from 'react-router-dom';
import { getMovieDetails } from 'shared/services/movies-api';

const SingleMovie = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from || '/';

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setLoading(true);
        const data = await getMovieDetails(movieId);
        setMovie(data);
      } catch ({ response }) {
        setError(response.data.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  return (
    <div>
      <button onClick={() => navigate(from)}>Go back</button>
      <h1>
        {movie?.title}
        {movie?.release_date}
      </h1>
      <p>{movie?.overview}</p>
      <p>Additional information</p>
      <Link to="cast" state={{ from }}>
        Cast
      </Link>
      <Link to="reviews" state={{ from }}>
        Reviews
      </Link>
      <Outlet />
      {error && <p>Something goes wrong...</p>}
    </div>
  );
};

export default SingleMovie;
