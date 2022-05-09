import { useState } from 'react';
import './App.css';
import Book from './componets/Book';
import Library from './Library';

function App() {
  const[search,setSearch]=useState("")

  
  return (
    <div className="App">
      <Library setSearch={setSearch}/>
      <Book search={search} />
    </div>
  );
}

export default App;
