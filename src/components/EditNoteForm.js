import React, { useState } from 'react';

const EditNoteForm = ({ note, handleEditNote, setEditing }) => {
  const [newTitle, setNewTitle] = useState(note.title);
  const [newText, setNewText] = useState(note.text);

  return (
    <li className='note new edit'>
      <div className='note-body'>
        <div className='header-note-box'>
          <input
            onChange={e => setNewTitle(e.target.value)}
            value={newTitle}
            type='text'
            title='Title'
            required
            placeholder='Type a new Title'
            className='input add-title'
          />
        </div>
        <textarea
          onChange={e => setNewText(e.target.value)}
          value={newText}
          className='add-note-text'
          autoFocus
          placeholder='Type a new text here...'
          rows='4'
          required
        ></textarea>
      </div>
      <div className='note-footer'>
        <button
          onClick={() => {
            handleEditNote({ id: note.id, newTitle, newText });
            setEditing(previousState => !previousState);
          }}
          className='btn btn-save'
        >
          Save
        </button>
      </div>
    </li>
  );
};

export default EditNoteForm;
