import React from 'react';
import Note from './Note';
import AddNote from './AddNote';

const NotesList = () => {
  return (
    <main>
      <section className='section-notes'>
        <ul className='notes-list'>
          <AddNote />
          <Note />
          <Note />
          <Note />
          <Note />
        </ul>
      </section>
    </main>
  );
};

export default NotesList;
