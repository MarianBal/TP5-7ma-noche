import React from 'react';

import style from './style';
import { classNames } from '../../constants/classNames';

const SideBarView = ({ sidebarOptions }) => {
  const classes = style();
  return (
    <div className={classes.container}>
      <ul className={classes.ul}>
        {sidebarOptions.map(option => {
          return (
            <li className={classes.categories} key={option.key}>
              <svg
                className={classes.svg}
                viewBox={classNames.viewBox}
                width={classNames.svgWeigth}
                height={classNames.svgWeigth}
              >
                <path d={option.path} fillRule={classNames.nonzero}></path>
              </svg>
              <p>{option.text}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBarView;
