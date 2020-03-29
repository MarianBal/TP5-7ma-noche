import React from 'react';

import style from './style';

const LogoView = () => {
  const classes = style();
  return <div className={classes.logoContainer}></div>;
};

export default LogoView;
