import React from "react";

function NoteList({ notes, filter }) {
  const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      {filteredNotes.map((note, index) => (
        <div
          key={index}
          style={{
            backgroundColor: note.color,
            padding: "10px",
            margin: "5px 0",
          }}
        >
          {note.text}
        </div>
      ))}
    </div>
  );
}

export default NoteList;
