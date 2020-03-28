import React from 'react';
import Container from '@material-ui/core/Button';

import style from './style';

const HeaderView = () => {
  const classes = style();

  return <Container className={classes.headerContainer}>Chau</Container>;
};

export default HeaderView;
