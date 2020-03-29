import React from 'react';
import { Container } from '@material-ui/core';

import Logo from './Logo';
import style from './style';

const HeaderView = () => {
  const classes = style();

  return (
    <Container className={classes.headerContainer}>
      <Logo />
    </Container>
  );
};

export default HeaderView;
