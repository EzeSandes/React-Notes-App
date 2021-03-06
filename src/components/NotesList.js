import React from 'react';
import Note from './Note';
import AddNote from './AddNote';

const NotesList = ({
  notes,
  handleAddNote,
  handleDeleteNote,
  handleEditNote,
}) => {
  return (
    <main>
      <section className='section-notes'>
        <ul className='notes-list'>
          <AddNote handleAddNote={handleAddNote} />
          {notes
            .map(note => (
              <Note
                note={note}
                key={note.id}
                handleDeleteNote={handleDeleteNote}
                handleEditNote={handleEditNote}
              />
            ))
            .reverse()}
        </ul>
      </section>
    </main>
  );
};

export default NotesList;
