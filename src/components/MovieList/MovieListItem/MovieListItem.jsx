import PropTypes from 'prop-types';

import css from './MovieListItem.module.css';

const MovieListItem = ({ title, img }) => {
  return (
    <li className={css.MovieListItem}>
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
    </li>
  );
};

export default MovieListItem;

MovieListItem.propTypes = {
  title: PropTypes.string.isRequired,
};
