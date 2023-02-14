import PropTypes from 'prop-types';
import { memo } from 'react';

import css from './ReviewsList.module.css';

const ReviewsList = ({ reviews }) => {
  console.log(reviews);
  const elements = reviews.map(({ id, author, content }) => (
    <li key={id}>
      <h3>{author}</h3>
      <p>{content}</p>
    </li>
  ));

  return <ol>{elements}</ol>;
};

export default memo(ReviewsList);

ReviewsList.defaultProps = {
  reviews: [],
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};
