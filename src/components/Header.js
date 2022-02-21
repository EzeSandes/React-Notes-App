import React from 'react';
import { IoSunnyOutline } from 'react-icons/io5';

const Header = () => {
  return (
    <header className='section-header'>
      <h1 className='heading-primary'>Notes App</h1>
      <button className='toggle'>
        <IoSunnyOutline />
      </button>
    </header>
  );
};

export default Header;
