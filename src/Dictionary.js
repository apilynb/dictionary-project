import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  
  function handleResponse(response) {
    console.log(response.data[0]);

  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    
    axios.get(apiUrl).then(handleResponse);

    return null
  }

  function handleWordChange(event) {
    setKeyword(event.target.value)
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
