import React, { useState } from 'react';
import { IoCreateOutline, IoTrashBin } from 'react-icons/io5';
import EditNoteForm from './EditNoteForm';

const Note = ({ note, handleDeleteNote, handleEditNote }) => {
  const [editing, setEditing] = useState(false);
  // "editing" will only change the specific "Note" component, not all the list.
  return editing ? (
    <EditNoteForm
      note={note}
      handleEditNote={handleEditNote}
      setEditing={setEditing}
    />
  ) : (
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
          <IoCreateOutline
            onClick={() => {
              setEditing(previousState => !previousState);
            }}
            className='edit-icon'
          />
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
