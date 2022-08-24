import React from "react";

export default function Phonetics(props) {
  console.log(props.phonetics);

  return (
    <div className="Phonetics">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        <i className="fa-regular fa-circle-play"></i>
      </a>
      <span> {props.phonetic.text} </span>
    </div>
  );
}
