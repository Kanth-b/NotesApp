import React from "react";
import Notecard from "./Notecard";
const NotesList = ({ notes, handleDelete }) => {
  return (
    <div className="notes-list">
      <h2>Your Notes</h2>
      {notes.map((note, index) => (
        <Notecard
          note={note}
          key={index}
          index={index}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default NotesList;
