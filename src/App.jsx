import React from "react";
import Navbar from "./Components/Navbar";
import NotesInput from "./Components/NotesInput";
import { useState } from "react";
import NotesList from "./Components/NotesList";

function App() {
  const [notes, setNotes] = useState([]);
  return (
    <>
      <Navbar />
      <NotesInput notes={notes} setNotes={setNotes} />
      <NotesList notes = {notes}/>
    </>
  );
}

export default App;
