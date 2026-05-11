import React from "react";
import { useState } from "react";

function Navbar({ searchtext, setsearchText, darkmode, setDarkmode }) {
  const [toggleTheme, settoggleTheme] = useState("dark");
  return (
    <nav className="navbar">
      <div className="logo">📝 NotesApp</div>
      <input
        type="text"
        placeholder="Search notes..."
        className="search-input"
        onChange={(e) => {
          setsearchText(e.target.value);
        }}
        value={searchtext}
      />
      <button
        className="theme-toggle"
        onClick={() => {
          setDarkmode(!darkmode);
        }}
      >
        {darkmode ? "☀️" : "🌙"}
      </button>
    </nav>
  );
}

export default Navbar;
