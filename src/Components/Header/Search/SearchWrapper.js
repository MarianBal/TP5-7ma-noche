import React, { useState } from 'react';

import SearchView from './SearchView';
import { handleSearchText } from './helper';

const SearchWrapper = () => {
  const [search, setSearch] = useState('');

  // const handleSearchText = event => {
  //   setSearch(event.target.value);
  // };

  console.log(search);

  return <SearchView handleSearchText={handleSearchText(setSearch)} />;
};

export default SearchWrapper;
