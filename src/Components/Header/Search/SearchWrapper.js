import React, { useState } from 'react';

import SearchView from './SearchView';
import { handleSearchText } from './helper';

const SearchWrapper = () => {
  const [search, setSearch] = useState('');

  return <SearchView handleSearchText={handleSearchText(setSearch)} />;
};

export default SearchWrapper;
