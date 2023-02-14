import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from 'shared/services/movies-api';

const SingleMoviePage = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

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

  console.log(movie);

  return (
    <div>
      <h1>
        {movie?.title}
        {movie?.release_date}
      </h1>
      <p>{movie?.overview}</p>
    </div>
  );
};

export default SingleMoviePage;
