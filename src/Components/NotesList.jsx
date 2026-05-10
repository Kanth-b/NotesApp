import React from "react";
import Notecard from "./Notecard";
const NotesList = ({ notes, handleDelete, searchtext }) => {
  const filteredNotes = notes.filter((note) =>
    note.toLowerCase().includes(searchtext.toLowerCase()),
  );
  console.log(filteredNotes);
  return (
    <div className="notes-list">
      <h2>Your Notes</h2>
      {filteredNotes.map((note, index) => (
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
