import MOVIES_ACTION_TYPES from './moviesTypes';
import sortMovies from '../util/index';

const initialState = {
  movies: [],
  loading: false,
  loadingMore: false,
  error: '',
  hasMoreResults: false,
  page: 1,
  searchCriteria: {
    movieTitle: '',
    year: '',
  },
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVIES_ACTION_TYPES.SEARCH_MOVIES_START:
      return {
        ...state,
        loading: true,
        searchCriteria: {},
      };
    case MOVIES_ACTION_TYPES.SEARCH_MOVIES_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
        movies: [],
      };
    case MOVIES_ACTION_TYPES.SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: [...action.payload],
        error: '',
        page: 1,
      };
    case MOVIES_ACTION_TYPES.SET_SEARCH_CRITERIA:
      return {
        ...state,
        searchCriteria: {
          ...action.payload,
        },
      };
    case MOVIES_ACTION_TYPES.SET_HAS_MORE_RESULTS:
      return {
        ...state,
        hasMoreResults: action.payload,
      };
    case MOVIES_ACTION_TYPES.SET_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    case MOVIES_ACTION_TYPES.LOAD_MORE_MOVIES_START:
      return {
        ...state,
        loadingMore: true,
      };
    case MOVIES_ACTION_TYPES.LOAD_MORE_MOVIES_FAILED:
      return {
        ...state,
        loadingMore: false,
      };
    case MOVIES_ACTION_TYPES.LOAD_MORE_MOVIES_SUCCESS:
      return {
        ...state,
        movies: [...state.movies, ...action.payload],
        loadingMore: false,
      };
    case MOVIES_ACTION_TYPES.SORT_MOVIES:
      return {
        ...state,
        movies: [...sortMovies(state.movies, action.payload)],
      };
    default:
      return state;
  }
};

export default moviesReducer;
