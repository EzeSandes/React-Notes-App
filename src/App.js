// HOOKS
import { useState } from 'react';

// COMPONENTS
import Header from './components/Header';
import Search from './components/Search';
import NotesList from './components/NotesList';

// Packages
import { nanoid } from 'nanoid';

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(10),
      title: 'Learn React',
      text: 'Practice, practice, practice',
      date: '01/02/2022',
    },
    {
      id: nanoid(10),
      title: 'Go to the shopping',
      text: 'I’d buy all i want if I had the money to do it :D',
      date: '01/02/2022',
    },
  ]);

  return (
    <div className='container'>
      <Header />
      <Search />
      <NotesList />
    </div>
  );
}

export default App;
