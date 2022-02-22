import React, { useState } from 'react';

const AddNote = ({ handleAddNote }) => {
  const [title, setTitle] = useState('');
  const [noteText, setNoteText] = useState('');

  const handleSaveClick = () => {
    if (noteText.trim().length > 0 && title.trim().length > 0) {
      handleAddNote({ title, text: noteText });
      setTitle('');
      setNoteText('');
    }
  };

  return (
    <li className='note new'>
      <div className='note-body'>
        <div className='header-note-box'>
          <input
            onChange={e => setTitle(e.target.value)}
            value={title}
            type='text'
            title='Title'
            required
            autoFocus
            placeholder='Enter a Title'
            className='input add-title'
          />
        </div>
        <textarea
          onChange={e => setNoteText(e.target.value)}
          value={noteText}
          className='add-note-text'
          placeholder='Type here...'
          rows='4'
          required
        ></textarea>
      </div>
      <div className='note-footer'>
        <button onClick={handleSaveClick} className='btn btn-save'>
          Add Note
        </button>
      </div>
    </li>
  );
};

export default AddNote;
