import React from 'react';

import style from './Style';
import { translations } from '../../../constants/translations';
import { classNames } from '../../../constants/classNames';
const { placeholderText } = translations.search;

const SearchView = ({ handleSearchText }) => {
  const classes = style();

  return (
    <div className={classes.searchContainer}>
      <i className={classNames.search}></i>
      <input
        className={classes.input}
        placeholder={placeholderText}
        onChange={handleSearchText}
      />
      <i className={`${classNames.bars} ${classes.bars}`}></i>
    </div>
  );
};

export default SearchView;
