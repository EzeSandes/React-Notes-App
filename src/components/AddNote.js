import React from 'react';

const AddNote = () => {
  return (
    <li className='note new'>
      <div className='note-body'>
        <div className='header-note-box'>
          <input
            type='text'
            placeholder='Enter a Title'
            className='input add-title'
          />
        </div>
        <textarea
          className='add-note-text'
          placeholder='Type here...'
          rows='4'
        ></textarea>
      </div>
      <div className='note-footer'>
        <button className='btn btn-save'>Add Note</button>
      </div>
    </li>
  );
};

export default AddNote;
