import React from 'react';
import PropTypes from 'prop-types';
import classes from './SearchForm.module.css';

const SearchForm = ({ handleSearch }) => (
  <form
    className={classes.searchForm}
    onSubmit={(e) => handleSearch(e)}
    autoComplete="off"
  >
    <input
      required
      name="movieTitle"
      type="search"
      placeholder="Search movie by title"
    />
    <input name="year" type="number" placeholder="Year" />
    <button className={classes.searchBtn} type="submit">
      &#128269;
    </button>
  </form>
);

SearchForm.propTypes = {
  // eslint-disable-next-line react/require-default-props
  handleSearch: PropTypes.func,
};

export default SearchForm;
