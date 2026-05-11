import React from "react";
import Navbar from "./Components/Navbar";
import NotesInput from "./Components/NotesInput";
import { useState } from "react";
import NotesList from "./Components/NotesList";

function App() {
  const [notes, setNotes] = useState([]);
  const [searchtext, setsearchText] = useState("");
  const [darkmode, setDarkmode] = useState(false);

  function handleDelete(indextoDelete) {
    const updatedNotes = notes.filter((_, index) => index !== indextoDelete);

    setNotes(updatedNotes);
  }

  return (
    <div className={darkmode ? "app dark" : "app"}>
      <Navbar
        searchtext={searchtext}
        setsearchText={setsearchText}
        darkmode={darkmode}
        setDarkmode={setDarkmode}
      />
      <NotesInput notes={notes} setNotes={setNotes} />
      <NotesList
        notes={notes}
        handleDelete={handleDelete}
        searchtext={searchtext}
      />
    </div>
  );
}

export default App;
