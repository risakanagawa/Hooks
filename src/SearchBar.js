import React, { useState } from "react";

export default function SearchBar(props) {
  const [term, setTerm] = useState("");
  return (
    <div className="header">
      <div className="logo-text">
        HOOKS
      </div>
      <form
        onSubmit={e => {
          e.preventDefault();
          props.search(term);
          setTerm("");
        }}
      >
        <input
          type="text"
          value={term}
          onChange={e => setTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div className="message">
        Get photos of your favorite.
      </div>
    </div>
  );
}
