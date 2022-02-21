import React from 'react';
import { IoCreateOutline, IoTrashBin } from 'react-icons/io5';

const Note = () => {
  return (
    <li className='note'>
      <div className='note-body'>
        <div className='header-note-box'>
          <h3 className='heading-secondary'>Learn React</h3>
        </div>
        <p className='note-text'>Practice, Practice and Practice...</p>
      </div>
      <div className='note-footer'>
        <span className='note-date'>01/01/2022</span>
        <div className='note-icons-box'>
          <IoCreateOutline className='edit-icon' />
          <IoTrashBin className='trash-icon' />
        </div>
      </div>
    </li>
  );
};

export default Note;
