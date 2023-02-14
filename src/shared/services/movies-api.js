import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'a7a8c3125d3bc96af718eb60f4553f10',
  },
});

export const getTrendingMovies = async () => {
  const { data } = await instance.get('/trending/movie/day');
  return data;
};

export const getMovieDetails = async movie_id => {
  const { data } = await instance.get(`/movie/${movie_id}`);
  return data;
};

export const searchMoviesByTitle = async query => {
  const { data } = await instance.get('/search/movie', {
    params: {
      query,
    },
  });
  return data;
};