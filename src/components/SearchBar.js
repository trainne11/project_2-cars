import { useState } from "react";

function SearchBar({ onSubmit }) {
  let [term, setTerm] = useState("");
  return (
    <div>
      <input
        onChange={(e) => setTerm(e.target.value)}
        type="text"
        placeholder="Search"
      />

      <button onClick={() => onSubmit(term)}>Search</button>
    </div>
  );
}

export default SearchBar;
