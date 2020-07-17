import React from 'react';
//import { Route, Router } from 'react-router-dom';

import Header from './../Header';
import SideBar from '../SideBar';
import Content from '../Content';
//import { PATHS } from './../../constants/paths';

const MainAppView = () => {
  return (
    <>
      <Header />
      <SideBar />
      <Content />
    </>
  );
};

export default MainAppView;
