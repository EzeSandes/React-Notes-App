import React from 'react';
import { IoCreateOutline, IoTrashBin } from 'react-icons/io5';

const Note = ({ note, handleDeleteNote }) => {
  return (
    <li className='note'>
      <div className='note-body'>
        <div className='header-note-box'>
          <h3 className='heading-secondary'>{note.title}</h3>
        </div>
        <p className='note-text'>{note.text}</p>
      </div>
      <div className='note-footer'>
        <span className='note-date'>{note.date}</span>
        <div className='note-icons-box'>
          <IoCreateOutline className='edit-icon' />
          <IoTrashBin
            onClick={() => handleDeleteNote(note.id)}
            className='trash-icon'
          />
        </div>
      </div>
    </li>
  );
};

export default Note;
