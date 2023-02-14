import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { searchReviewsByMovieId } from 'shared/services/movies-api';
import ReviewsList from './ReviewsList/ReviewsList';

import css from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        setLoading(true);
        const data = await searchReviewsByMovieId(movieId);
        setReviews(data.results);
      } catch ({ response }) {
        setError(response.data.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieReviews();
  }, [movieId]);

  return (
    <div>
      <ReviewsList reviews={reviews} />
      {error && <p>Something goes wrong...</p>}
    </div>
  );
};

export default Reviews;
