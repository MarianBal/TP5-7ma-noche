import React from 'react';
//import { Route, Router } from 'react-router-dom';

import Header from './../Header';
import SideBar from '../SideBar';
import Content from '../Content';
import style from './style';
//import { PATHS } from './../../constants/paths';

const MainAppView = () => {
  const classes = style();
  return (
    <>
      <Header />
      <div className={classes.mainContainer}>
        <SideBar />
        <Content />
      </div>
    </>
  );
};

export default MainAppView;
