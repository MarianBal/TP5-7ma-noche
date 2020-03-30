import React from 'react';

import LogoView from './LogoView';
import { goBackToMain } from './helper';

const LogoWrapper = () => {
  return <LogoView goBackToMain={goBackToMain} />;
};

export default LogoWrapper;
