import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

import css from './MovieListItem.module.css';

const MovieListItem = ({ title, img, id }) => {
  const location = useLocation();
  return (
    <li className={css.MovieListItem}>
      <Link
        className={css.MovieListLink}
        to={`/movies/${id}`}
        state={{ from: location }}
      >
        <img
          className={css.MovieListImage}
          src={
            img
              ? `https://image.tmdb.org/t/p/original${img}`
              : 'https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-'
          }
          alt={title}
          loading="lazy"
        />
        <h4>{title}</h4>
      </Link>
    </li>
  );
};

export default MovieListItem;

MovieListItem.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string,
  id: PropTypes.number.isRequired,
};
