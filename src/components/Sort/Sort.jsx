/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import classes from './Sort.module.css';

const Sort = ({ options, handleChange }) => (
  <div className={classes.wrapper}>
    <select className={classes.select} defaultValue="" onClick={handleChange}>
      {options.map((option) => (
        <option label={option.label} value={option.value} key={option.id} />
      ))}
    </select>
  </div>
);

Sort.propTypes = {
  // eslint-disable-next-line react/require-default-props
  options: PropTypes.arrayOf(PropTypes.object),
  handleChange: PropTypes.func,
};

export default Sort;
