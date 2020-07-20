import React from 'react';

import Hero from './Hero';
import style from './style';

const ContentView = () => {
  const classes = style();
  return (
    <div className={classes.verticalContainer}>
      <Hero />
    </div>
  );
};

export default ContentView;
