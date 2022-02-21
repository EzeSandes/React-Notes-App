// HOOKS
import { useState } from 'react';

// COMPONENTS
import Header from './components/Header';
import Search from './components/Search';
import NotesList from './components/NotesList';

// Packages
import { nanoid } from 'nanoid';

// DEFINES
const ID_LENGTH = 10;

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(ID_LENGTH),
      title: 'Learn React',
      text: 'Practice, practice, practice',
      date: '01/02/2022',
    },
    {
      id: nanoid(ID_LENGTH),
      title: 'Go to the shopping',
      text: "I'd buy all i want if I had the money to do it :D",
      date: '01/04/2022',
    },
  ]);
  const [searchText, setSearchText] = useState('');

  const addNote = newItem => {
    const newNote = {
      id: nanoid(ID_LENGTH),
      title: newItem.title,
      text: newItem.text,
      date: new Date().toLocaleDateString(),
    };

    setNotes([...notes, newNote]);
  };

  const deleteNote = id => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div className='container'>
      <Header />
      <Search searchText={searchText} setSearchText={setSearchText} />
      <NotesList
        notes={notes.filter(
          note =>
            note.title.toLowerCase().includes(searchText) ||
            note.text.toLowerCase().includes(searchText) ||
            note.date.includes(searchText)
        )}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
}

export default App;
