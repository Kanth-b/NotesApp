import React from "react";

const Notecard = ({ note, index, handleDelete }) => {
  return (
    <div className="note-card">
      <p>{note}</p>
      <button onClick={() => handleDelete(index)}>Delete</button>
    </div>
  );
};

export default Notecard;
