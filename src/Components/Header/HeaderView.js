import React from 'react';
import { Container } from '@material-ui/core';

import Logo from './Logo';
import Search from './Search';
import style from './style';

const HeaderView = () => {
  const classes = style();

  return (
    <Container className={classes.headerContainer}>
      <Logo />
      <Search />
    </Container>
  );
};

export default HeaderView;
