import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MoviesList from '../MoviesList/MoviesList';
import { loadMoreMoviesAsync } from '../../redux/movies/moviesActions';
import classes from './MoviesContainer.module.css';
import Spinner from '../Spinner/Spinner';

const MoviesContainer = () => {
  const movies = useSelector((state) => state.movies.movies);
  const error = useSelector((state) => state.movies.error);
  const loading = useSelector((state) => state.movies.loading);
  const loadingMore = useSelector((state) => state.movies.loadingMore);
  const hasMoreResults = useSelector((state) => state.movies.hasMoreResults);
  const dispatch = useDispatch();
  return (
    <div className={classes.moviesContainer}>
      {!error && movies.length < 1 ? (
        <h3 className={classes.message}>Nothing found yet...</h3>
      ) : null}
      {loading ? <Spinner /> : <MoviesList movies={movies} />}
      {loadingMore && <Spinner />}
      {hasMoreResults && movies.length > 0 && (
        <button
          className={classes.loadMoreBtn}
          type="button"
          onClick={() => dispatch(loadMoreMoviesAsync())}
        >
          LOAD MORE RESULTS
        </button>
      )}
    </div>
  );
};
export default MoviesContainer;
