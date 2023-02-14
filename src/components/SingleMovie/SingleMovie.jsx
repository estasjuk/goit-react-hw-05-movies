import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link, Outlet } from 'react-router-dom';
import { getMovieDetails } from 'shared/services/movies-api';

const SingleMovie = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  const navigate = useNavigate();

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
      <button onClick={() => navigate(-1)}>Go back</button>
      <h1>
        {movie?.title}
        {movie?.release_date}
      </h1>
      <p>{movie?.overview}</p>
      <p>Additional information</p>
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
      <Outlet />
      {error && <p>Something goes wrong...</p>}
    </div>
  );
};

export default SingleMovie;
