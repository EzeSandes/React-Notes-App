import React from 'react';
import { IoSearchOutline } from 'react-icons/io5';

const Search = ({ searchText, setSearchText }) => {
  return (
    <div className='search'>
      <IoSearchOutline className='icon-search' />
      <input
        onChange={e => setSearchText(e.target.value)}
        value={searchText}
        className='input'
        type='text'
        placeholder='Type to search...'
      />
    </div>
  );
};

export default Search;
