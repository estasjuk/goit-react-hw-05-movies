import PropTypes from 'prop-types';
import { memo } from 'react';

import css from './CastList.module.css';

const CastList = ({ cast }) => {
  const elements = cast.map(({ id, name, profile_path }) => (
    <li key={id}>
      <img
        className={css.CastListImage}
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/original${profile_path}`
            : 'https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-'
        }
        alt={name}
        loading="lazy"
      />
      <p className={css.name}>{name}</p>
    </li>
  ));

  return <ul className={css.CastList}>{elements}</ul>;
};

export default memo(CastList);

CastList.defaultProps = {
  casts: [],
};

CastList.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      profile_path: PropTypes.string,
    })
  ),
};
