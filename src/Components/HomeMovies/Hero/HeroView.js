import React from 'react';

import style from './style';
import { translations } from '../../../constants/translations';
const HeroView = () => {
  const classes = style();
  return (
    <div className={classes.hero}>
      <div className={classes.heroText}>
        <p>{translations.hero.heroText}</p>
      </div>
    </div>
  );
};

export default HeroView;
