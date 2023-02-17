//import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
//import Loader from 'shared/components/Loader/Loader';
import Navbar from './Navbar/Navbar';

//const Navbar = lazy(() => import('./Navbar/Navbar'));
import HomePage from 'pages/HomePage/HomePage';
//const HomePage = lazy(() => import('pages/HomePage/HomePage'));
import SingleMoviePage from 'pages/SingleMoviePage/SingleMoviePage';
// const SingleMoviePage = lazy(() =>
//   import('pages/SingleMoviePage/SingleMoviePage')
// );
import CastPage from 'pages/CastPage/CastPage';
//const CastPage = lazy(() => import('pages/CastPage/CastPage'));
import ReviewsPage from 'pages/ReviewsPage/ReviewsPage';
//const ReviewsPage = lazy(() => import('pages/ReviewsPage/ReviewsPage'));
import MoviesSearchPage from 'pages/MoviesSearchPage/MoviesSearchPage';
// const MoviesSearchPage = lazy(() =>
//   import('pages/MoviesSearchPage/MoviesSearchPage')
// );

export const App = () => {
  return (
    <>
      <Navbar />
      {/* <Suspense fallback={<Loader />}> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies/:movieId" element={<SingleMoviePage />}>
          <Route path="cast" element={<CastPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
        </Route>
        <Route path="/movies" element={<MoviesSearchPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      {/* </Suspense> */}
    </>
  );
};
