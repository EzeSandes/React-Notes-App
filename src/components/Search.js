import React from 'react';
import { IoSearchOutline } from 'react-icons/io5';

const Search = () => {
  return (
    <div className='search'>
      <IoSearchOutline className='icon-search' />
      <input className='input' type='text' placeholder='Type to search...' />
    </div>
  );
};

export default Search;
