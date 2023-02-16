import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { searchCastByMovieId } from 'shared/services/movies-api';
import CastList from './CastList/CastList';
import Loader from 'shared/components/Loader/Loader';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        setLoading(true);
        const data = await searchCastByMovieId(movieId);
        setCast(data.cast);
      } catch ({ response }) {
        setError(response.data.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieCast();
  }, [movieId]);

  return (
    <div>
      <CastList cast={cast} />
      {error && <p>Something goes wrong...</p>}
      {loading && <Loader />}
    </div>
  );
};

export default Cast;
