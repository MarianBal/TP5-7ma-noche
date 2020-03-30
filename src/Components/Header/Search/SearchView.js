import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

import style from './Style';

const SearchView = ({ handleSearchText }) => {
  const classes = style();

  return (
    <div className={classes.searchContainer}>
      <SearchIcon className={classes.lookingGlass} />
      <input
        className={classes.input}
        placeholder="Search for a movie..."
        onChange={handleSearchText}
      />
    </div>
  );
};

export default SearchView;
