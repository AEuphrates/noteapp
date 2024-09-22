import React, { useState } from "react";
import SearchBar from "./SearchBar";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [filter, setFilter] = useState("");

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const handleSearch = (event) => {
    setFilter(event.target.value.toLowerCase()); // Doğru erişim sağlanıyor
  };

  return (
    <div className="app">
      <SearchBar onSearch={handleSearch} />
      <NoteForm onAddNote={addNote} />
      <NoteList notes={notes} filter={filter} />
    </div>
  );
}

export default App;
