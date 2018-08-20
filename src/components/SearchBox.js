export default SearchBar;

import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => (
  <input
    className='pa3 ba b--green bg-lightest-blue'
    type='search'
    placeholder='迎貼神'
    onChange={searchChange}
  />
)

export default SearchBox