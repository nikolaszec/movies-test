import React from 'react';
import PropTypes from 'prop-types';
import Movie from '../Movie/Movie';
import classes from './MoviesList.module.css';

const MoviesList = ({ movies }) => (
  <ul className={classes.moviesList}>
    {movies.map((movie) => (
      <Movie data={movie} key={movie.imdbID} />
    ))}
  </ul>
);

MoviesList.defaultProps = {
  movies: [],
};
MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

export default MoviesList;
