import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import Photos from "./Photos";

export default function Results(props) {
  console.log(props.results);

  if (props.results) {
    return (
      <div className="Results text-start">
        <section>
          <h2 className="text-lowercase main-word"> {props.results.word}</h2>
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetics phonetic={phonetic} />
              </div>
            );
          })}
        </section>
          <Photos photos={props.photos} keyword={props.keyword} />
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
