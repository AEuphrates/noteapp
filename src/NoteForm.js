import React, { useState } from "react";

function NoteForm({ onAddNote }) {
  const [text, setText] = useState("");
  const [color, setColor] = useState("yellow");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!text) return; // Eğer metin yoksa, hiçbir şey yapma
    onAddNote({ text, color });
    setText(""); // Formu sıfırla
    setColor("yellow"); // Rengi varsayılana çevir
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <select value={color} onChange={(e) => setColor(e.target.value)}>
        <option value="yellow">Yellow</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
      </select>
      <button type="submit">Add</button>
    </form>
  );
}

export default NoteForm;
