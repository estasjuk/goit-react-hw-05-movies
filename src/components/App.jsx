import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Navbar/Navbar';
import HomePage from 'pages/HomePage/HomePage';
import SingleMoviePage from 'pages/SingleMoviePage/SingleMoviePage';
import CastPage from 'pages/CastPage/CastPage';
import ReviewsPage from 'pages/ReviewsPage/ReviewsPage';
import MoviesSearchPage from 'pages/MoviesSearchPage/MoviesSearchPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies/:movieId" element={<SingleMoviePage />}>
          <Route path="cast" element={<CastPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
        </Route>
        <Route path="/movies" element={<MoviesSearchPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
