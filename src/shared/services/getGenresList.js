export const getGenresList = array => {
  return array.map(genre => genre.name).join(', ');
};
