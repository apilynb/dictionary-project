import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import { RotatingLines } from "react-loader-spinner";


export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultWord);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    // documentation: https://www.dictionaryapi.dev/e
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();

    search();
  }

  function handleWordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <h1>What word do you want to look up?</h1>
        <section>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                id="city-input"
                type="text"
                autoComplete="on"
                autoCorrect="on"
                className="form-control search-bar shadow-sm"
                placeholder="Search for a word"
                onChange={handleWordChange}
              />
              <input
                className=" submit btn btn-outline-secondary shadow-sm"
                type="submit"
                id="button-addon2"
              />
            </div>
          </form>
          <div className="hint text-start">
            Suggested words: sunset, yoga, weather, sports...
          </div>
        </section>
        <Results results={results} />
      </div>
    );

  } else {
    load();
    return (
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    );

  }

 
}
