import React from 'react';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import classes from './Main.module.css';

const Main = () => (
  <div className={classes.main}>
    <MoviesContainer />
    <button
      onClick={() => window.scrollTo({ top: 0 })}
      className={classes.backToTopBtn}
      type="button"
    >
      &#10140;
    </button>
  </div>
);

export default Main;
