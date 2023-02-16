import TrendingMovies from 'components/TrendingMovies/TrendingMovies';

import css from './Homepage.module.css';

const HomePage = () => {
  return (
    <>
      <h1 className={css.title}>Trending today</h1>
      <TrendingMovies />
    </>
  );
};

export default HomePage;
