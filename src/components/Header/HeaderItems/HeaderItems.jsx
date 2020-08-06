import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './HeaderItems.module.css';
import SearchForm from '../../../forms/SearchForm/SearchForm';
import Sort from '../../Sort/Sort';
import options from '../../../data/sort';
import {
  searchMoviesAsync,
  sortMovies,
} from '../../../redux/movies/moviesActions';

const HeaderItems = () => {
  const error = useSelector((state) => state.movies.error);
  const movies = useSelector((state) => state.movies.movies);
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    e.preventDefault();
    const movieTitle = e.target.movieTitle.value;
    const year = e.target.year.value;
    dispatch(searchMoviesAsync(movieTitle, year));
  };

  const handleSort = (e) => {
    const { value } = e.target;
    dispatch(sortMovies(value));
  };
  return (
    <div className={classes.headerItems}>
      <SearchForm handleSearch={handleSearch} />
      {error && <h4 className={classes.errorMessage}>{error}</h4>}
      {movies.length > 0 && (
        <Sort handleChange={handleSort} options={options} />
      )}
    </div>
  );
};

export default HeaderItems;
