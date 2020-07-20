import React, { useEffect } from 'react';

import MainAppView from './MainAppView';
import { getPopular } from './helper';

const MainAppWrapper = () => {
  useEffect(() => getPopular(), []);

  return <MainAppView />;
};

export default MainAppWrapper;
