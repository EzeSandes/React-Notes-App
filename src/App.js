// HOOKS
import { useState, useEffect } from 'react';

// COMPONENTS
import Header from './components/Header';
import Search from './components/Search';
import NotesList from './components/NotesList';

// Packages
import { nanoid } from 'nanoid';

// CONFIGS
const LOCAL_DATA_KEY = 'react-notes-data';
const ID_LENGTH = 10;

const getLocalNotes = () => {
  return JSON.parse(localStorage.getItem(LOCAL_DATA_KEY) || []);
};

function App() {
  const [notes, setNotes] = useState(getLocalNotes());
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    localStorage.setItem(LOCAL_DATA_KEY, JSON.stringify(notes));
  }, [notes]);

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

  const editNote = newNote => {
    const editedNote = {
      id: newNote.id,
      title: newNote.newTitle,
      text: newNote.newText,
      date: new Date().toLocaleDateString(),
    };

    console.log(editedNote);
    const newNotes = notes.filter(note => note.id !== editedNote.id);
    // Save the edited Note with the SAME Id.
    setNotes([...newNotes, editedNote]);
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
        handleEditNote={editNote}
      />
    </div>
  );
}

export default App;
