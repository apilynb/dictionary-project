import React from "react";

export default function Antonyms(props) {
  console.log(props.antonyms);

  if (props.antonyms.length > 0) {
    return (
      <div className="Antonyms">
        <strong>Antonyms:</strong>
        <ul>
          {props.antonyms.map(function (antonym, index) {
            return <li key={index}>{antonym}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
