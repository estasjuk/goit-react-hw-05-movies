import PropTypes from 'prop-types';
import { memo } from 'react';

import css from './MovieList.module.css';
import MovieListItem from './MovieListItem/MovieListItem';

const MovieList = ({ movies }) => {
  const elements = movies.map(({ id, title, poster_path }) => (
    <MovieListItem key={id} id={id} title={title} img={poster_path} />
  ));

  return (
    <div className={css.wrapper}>
      <ul className={css.MovieList}>{elements}</ul>
    </div>
  );
};

export default memo(MovieList);

MovieList.defaultProps = {
  movies: [],
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    })
  ),
};
