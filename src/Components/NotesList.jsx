import React from "react";
import Notecard from "./Notecard";
const NotesList = ({ notes }) => {
  return (
    <div className="notes-list">
      <h2>Your Notes</h2>
      {notes.map((note, index) => (
        <Notecard note={note} key={index} />
      ))}
    </div>
  );
};

export default NotesList;
