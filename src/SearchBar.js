import React from "react";

function SearchBar({ onSearch }) {
  return (
    <input
      type="text"
      placeholder="Search..."
      onChange={onSearch} // Burada doğrudan event'i onSearch'a paslayın
    />
  );
}

export default SearchBar;
