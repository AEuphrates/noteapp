import React from "react";

function Note({ text, color }) {
  const style = { backgroundColor: color };
  return <div style={style}>{text}</div>;
}

export default Note;
