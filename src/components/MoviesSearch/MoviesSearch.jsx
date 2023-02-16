import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

import css from './MoviesSearch.module.css';
import Searchbar from './Searchbar/Searchbar';
import MovieList from 'components/MovieList/MovieList';
import { searchMoviesByTitle } from 'shared/services/movies-api';
import Loader from '../../shared/components/Loader/Loader';
import Button from 'shared/components/Button/Button/Button';

const MovieSearch = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isLoadMore, setIsLoadMore] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');
  const page = searchParams.get('page');

  const onSearchMovies = search => {
    setSearchParams({ search, page: 1 });
    setMovies([]);
  };

  useEffect(() => {
    const checkData = ({ page, total_results, results }) => {
      console.log(total_results);
      const PER_PAGE = 20;
      if (page === 1 && total_results > PER_PAGE) {
        setIsLoadMore(true);
        console.log(page, isLoadMore);
      }
      if (total_results === 0) {
        setIsLoadMore(false);
      } else if (results.length < PER_PAGE) {
        alert('Oops! This is a finish, try something else');
        setIsLoadMore(false);
      }
    };
    if (search) {
      const fetchMovies = async () => {
        try {
          setLoading(true);
          const data = await searchMoviesByTitle(search, page);
          //console.log(data);
          setMovies(prevMovies => [...prevMovies, ...data.results]);
          checkData(data);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };

      fetchMovies();
    }
  }, [search, page, setIsLoadMore, isLoadMore]);

  const loadMore = useCallback(() => {
    setSearchParams({ search, page: Number(page) + 1 });
  }, [page, search, setSearchParams]);

  return (
    <div className={css.App}>
      <Searchbar onSubmit={onSearchMovies} />
      {movies.length !== 0 && <MovieList movies={movies} />}
      {loading && <Loader />}
      {error && <p>Something goes wrong...</p>}
      {isLoadMore && <Button onClick={loadMore} />}
    </div>
  );
};

export default MovieSearch;
