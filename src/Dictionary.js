import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [word, setWord] = useState(null);


  function search(event) {
    event.preventDefault();
   return alert(`Searching for ${word}'s definition`)
  }

  function handleWordChange(event) {
    setWord(event.target.value)
  }


  return (
    <div className="Dictionary">
      <form onSubmit={search} className="clearfix m-5">
        <input
          type="search"
          className="form me-2"
          onChange={handleWordChange}
        />
        <input type="submit" className="btn btn-dark" />
      </form>
    </div>
  );
}
