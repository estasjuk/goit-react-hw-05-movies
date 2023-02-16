import { useState, useEffect } from 'react';
import MovieList from 'components/MovieList/MovieList';
import Loader from 'shared/components/Loader/Loader';

import { getTrendingMovies } from '../../shared/services/movies-api';

const TrendingMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setLoading(true);
        const data = await getTrendingMovies();
        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingMovies();
  }, [setLoading, setMovies, setError]);

  return (
    <div>
      <MovieList movies={movies} />
      {error && <p>Something goes wrong...</p>}
      {loading && <Loader />}
    </div>
  );
};

export default TrendingMovies;
