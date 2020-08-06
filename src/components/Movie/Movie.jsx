import React from 'react';
import PropTypes from 'prop-types';
import classes from './Movie.module.css';

const Movie = ({ data }) => {
  let imageStyle = {};
  if (data.Poster !== 'N/A') {
    imageStyle = {
      background: `url(${data.Poster})`,
    };
  }

  return (
    <div className={classes.movie} style={imageStyle}>
      <div className={classes.movieDetails}>
        <h3>{data.Title}</h3>
        <h3>{data.Year}</h3>
      </div>
    </div>
  );
};

Movie.defaultProps = {
  data: {},
};
Movie.propTypes = {
  data: PropTypes.shape({
    Poster: PropTypes.string,
    Title: PropTypes.string,
    Year: PropTypes.string,
  }),
};
export default Movie;
