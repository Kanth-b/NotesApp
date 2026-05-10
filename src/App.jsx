import React from "react";
import Navbar from "./Components/Navbar";
import NotesInput from "./Components/NotesInput";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState(null);
  return (
    <>
      <Navbar />
      <NotesInput notes={notes} setNotes={setNotes} />
    </>
  );
}

export default App;
