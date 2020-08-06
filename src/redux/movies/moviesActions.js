import MOVIES_ACTION_TYPES from './moviesTypes';
import axios from '../../axios/index';

export const searchMoviesStart = () => ({
  type: MOVIES_ACTION_TYPES.SEARCH_MOVIES_START,
});

export const searchMoviesFailed = (error) => ({
  type: MOVIES_ACTION_TYPES.SEARCH_MOVIES_FAILED,
  payload: error,
});

export const searchMoviesSuccess = (movies) => ({
  type: MOVIES_ACTION_TYPES.SEARCH_MOVIES_SUCCESS,
  payload: movies,
});

export const setSearchCriteria = (criteria) => ({
  type: MOVIES_ACTION_TYPES.SET_SEARCH_CRITERIA,
  payload: criteria,
});

export const setHasMoreResults = (hasMoreResults) => ({
  type: MOVIES_ACTION_TYPES.SET_HAS_MORE_RESULTS,
  payload: hasMoreResults,
});

export const setPage = (page) => ({
  type: MOVIES_ACTION_TYPES.SET_PAGE,
  payload: page,
});

export const loadMoreMoviesStart = () => ({
  type: MOVIES_ACTION_TYPES.LOAD_MORE_MOVIES_START,
});
export const loadMoreMoviesFailed = () => ({
  type: MOVIES_ACTION_TYPES.LOAD_MORE_MOVIES_FAILED,
});

export const loadMoreMoviesSucces = (movies) => ({
  type: MOVIES_ACTION_TYPES.LOAD_MORE_MOVIES_SUCCESS,
  payload: movies,
});

export const sortMovies = (sortBy) => ({
  type: MOVIES_ACTION_TYPES.SORT_MOVIES,
  payload: sortBy,
});

export const searchMoviesAsync = (movieTitle, year) => async (dispatch) => {
  dispatch(searchMoviesStart());
  try {
    const response = await axios.get('', {
      params: {
        s: movieTitle,
        y: year,
      },
    });
    if (response.data.Response === 'True') {
      dispatch(searchMoviesSuccess(response.data.Search));
      // eslint-disable-next-line radix
      if (parseInt(response.data.totalResults) > 10) {
        dispatch(setSearchCriteria({ movieTitle, year }));
        dispatch(setHasMoreResults(true));
      } else {
        dispatch(setHasMoreResults(false));
      }
    } else {
      dispatch(searchMoviesFailed(response.data.Error));
    }
  } catch ({ error }) {
    dispatch(searchMoviesFailed('Something went wrong.'));
  }
};
export const loadMoreMoviesAsync = () => async (dispatch, getState) => {
  dispatch(loadMoreMoviesStart());
  try {
    const { searchCriteria, page } = getState().movies;
    const nextPage = page + 1;
    const response = await axios.get('', {
      params: {
        s: searchCriteria.movieTitle,
        y: searchCriteria.year,
        page: nextPage,
      },
    });
    if (response.data.Response === 'True') {
      dispatch(setPage(nextPage));
      dispatch(loadMoreMoviesSucces(response.data.Search));
    } else {
      dispatch(setHasMoreResults(false));
      dispatch(loadMoreMoviesFailed());
    }
  } catch ({ error }) {
    dispatch(searchMoviesFailed('Something went wrong.'));
  }
};
