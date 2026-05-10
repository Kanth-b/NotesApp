import React from "react";
import { useState } from "react";

function NotesInput({ notes, setNotes }) {
  const [input, setInput] = useState(null);

  function handleAddNotes() {
    if (input.trim() === "") {
      return;
    }
    setNotes({
      ...notes,
      input,
    });

    setInput("");
  }
  return (
    <div className="notes-input-container">
      <input
        type="text"
        placeholder="Enter a Note"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button onClick={handleAddNotes}> Add </button>
    </div>
  );
}

export default NotesInput;
