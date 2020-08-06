/* eslint-disable implicit-arrow-linebreak */
const sortMovies = (movies, values) => {
  const valuesForSorting = values.split('-');
  const objProperty = valuesForSorting[0];
  const sortBy = valuesForSorting[1];
  let arr = [];
  if (sortBy === 'asc') {
    arr = movies.sort(
      (a, b) =>
        (a[objProperty] > b[objProperty]) - (a[objProperty] < b[objProperty]),
    );
  } else {
    arr = movies.sort(
      (a, b) =>
        (b[objProperty] > a[objProperty]) - (b[objProperty] < a[objProperty]),
    );
  }
  return arr;
};

export default sortMovies;
