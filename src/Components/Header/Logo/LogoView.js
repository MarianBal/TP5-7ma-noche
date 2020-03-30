import React from 'react';

import style from './style';
import { translations } from './../../../constants/translations';

const LogoView = ({ goBackToMain }) => {
  const classes = style();
  const { adaAlt } = translations.logo;

  return (
    <div className={classes.logoContainer} onClick={goBackToMain}>
      <img
        className={classes.logo}
        src={require('./../../../img/logo.png')}
        alt={adaAlt}
      />
    </div>
  );
};

export default LogoView;
