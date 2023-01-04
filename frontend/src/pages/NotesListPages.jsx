import React from "react";
import ListItem from "../components/ListItem";
import { useState, useEffect } from "react";
import AddButton from "../components/AddButton";

const NotesListPages = () => {
  const [notes, setnotes] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  let getNotes = async () => {
    let response = await fetch("/api/notes/");
    let data = await response.json();
    console.log("DATA:", data);
    setnotes(data);
  };
  return (
    <div className="notes">
      <div className="notes-header">
        <h2 className="notes-title">&#9782; Notes</h2>
        <p className="notes-count">{notes.length}</p>
      </div>


      <div className="notes-list">
        {notes.map((note, index) => (
          <ListItem key={index} note={note} />
        ))}
      </div>

      <AddButton />
    </div>
  );
};

export default NotesListPages;
