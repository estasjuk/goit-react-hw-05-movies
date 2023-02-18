import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from 'shared/components/Loader/Loader';

const Navbar = lazy(() => import('./Navbar/Navbar'));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const SingleMoviePage = lazy(() =>
  import('pages/SingleMoviePage/SingleMoviePage')
);
const CastPage = lazy(() => import('pages/CastPage/CastPage'));
const ReviewsPage = lazy(() => import('pages/ReviewsPage/ReviewsPage'));
const MoviesSearchPage = lazy(() =>
  import('pages/MoviesSearchPage/MoviesSearchPage')
);

export const App = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/goit-react-hw-05-movies" element={<HomePage />} />
          <Route path="/movies/:movieId" element={<SingleMoviePage />}>
            <Route path="cast" element={<CastPage />} />
            <Route path="reviews" element={<ReviewsPage />} />
          </Route>
          <Route path="/movies" element={<MoviesSearchPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </>
  );
};
