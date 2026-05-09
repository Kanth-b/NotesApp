import React from "react";
import { useState } from "react";

function Navbar() {
  const [toggleTheme, settoggleTheme] = useState("dark");
  return (
    <nav className="navbar">
      <div className="logo">📝 NotesApp</div>
      <input type="text" placeholder="Search notes..." className="search-input" />
      <button className="theme-toggle"> 🌙</button>
    </nav>
  );
}

export default Navbar;
