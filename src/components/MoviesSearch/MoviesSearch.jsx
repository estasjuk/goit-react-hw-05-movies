import { useState, useEffect } from 'react';

import css from './MoviesSearch.module.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './MovieGallery/ImageGallery';
import { searchMoviesByTitle } from 'shared/services/movies-api';
import Loader from 'shared/components/Loader/Loader';

const MovieSearch = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [isLoadMore, setIsLoadMore] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const onSearchMovies = search => {
    setSearch(search);
    setPage(1);
    setMovies([]);
  };

  useEffect(() => {
    // const checkData = ({ totalHits, hits }) => {
    //   const PER_PAGE = 12;
    //   if (page === 1 && totalHits !== 0) {
    //     setIsLoadMore(true);
    //   }
    //   if (totalHits === 0) {
    //     setIsLoadMore(false);
    //   } else if (hits.length < PER_PAGE) {
    //     alert('Oops! This is a finish, try something else');
    //     setIsLoadMore(false);
    //   }
    // };
    if (search) {
      const fetchMovies = async () => {
        try {
          setLoading(true);
          const data = await searchMoviesByTitle(search, page);
          setMovies(prevMovies => [...prevMovies, ...data.results]);
          //checkData(data);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };

      fetchMovies();
    }
  }, [search, page, setIsLoadMore]);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div className={css.App}>
      <Searchbar onSubmit={onSearchMovies} />
      {movies.length !== 0 && <ImageGallery pictures={movies} />}
      {loading && <Loader />}
      {error && <p>Something goes wrong...</p>}
      {/* {isLoadMore && <Button onClick={loadMore} />} */}
    </div>
  );
};

export default MovieSearch;
