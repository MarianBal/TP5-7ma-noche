import React from 'react';

import style from './style';
import HomeMovies from '../HomeMovies';

const ContentView = () => {
  const classes = style();
  return (
    <div className={classes.verticalContainer}>
      <HomeMovies />
    </div>
  );
};

export default ContentView;
