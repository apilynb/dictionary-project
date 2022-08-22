import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  console.log(props.results);

  if (props.results) {
    return (
      <div className="Results text-start">
        <h2 className="text-lowercase"> {props.results.word}</h2>
        {props.results.meanings.map(function (meaning, index) {
          return <div key={index}> <Meaning meaning={meaning} />  </div>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
