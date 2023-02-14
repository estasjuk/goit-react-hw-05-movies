import PropTypes from 'prop-types';
import { memo } from 'react';
import { Link } from 'react-router-dom';

import css from './MovieList.module.css';
import MovieListItem from './MovieListItem/MovieListItem';

const MovieList = ({ movies }) => {
  const elements = movies.map(({ id, title, poster_path }) => (
    <Link className={css.MovieListLink} key={id} to={`/movies/${id}`}>
      <MovieListItem title={title} img={poster_path} />
    </Link>
  ));

  return <ul className={css.MovieList}>{elements}</ul>;
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
    })
  ),
};
