import React from "react";
import Navbar from "./Components/Navbar";
import NotesInput from "./Components/NotesInput";
import { useState } from "react";
import NotesList from "./Components/NotesList";

function App() {
  const [notes, setNotes] = useState([]);
  const [searchtext, setsearchText] = useState("");

  function handleDelete(indextoDelete) {
    const updatedNotes = notes.filter((_, index) => index !== indextoDelete);

    setNotes(updatedNotes);
  }

  return (
    <>
      <Navbar searchtext={searchtext} setsearchText={setsearchText} />
      <NotesInput notes={notes} setNotes={setNotes} />
      <NotesList notes={notes} handleDelete={handleDelete} searchtext={searchtext}/>
    </>
  );
}

export default App;
