import React, { useState } from 'react';
import { IoSunnyOutline } from 'react-icons/io5';
import { IoMoon } from 'react-icons/io5';

const handleToggleDarkMode = setDarkMode => {
  setDarkMode(previousState => !previousState);
  document.body.classList.toggle('dark-mode');
};

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <header className='section-header'>
      <h1 className='heading-primary'>Notes App</h1>
      <button
        onClick={() => handleToggleDarkMode(setDarkMode)}
        className='toggle'
      >
        {darkMode ? <IoMoon /> : <IoSunnyOutline />}
      </button>
    </header>
  );
};

export default Header;
