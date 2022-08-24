import React from "react";

export default function Synonyms(props) {
  console.log(props.synonyms);

  if (props.synonyms.length > 0) {
    return (
      <div className="Synonyms">
        <span>
          {props.synonyms.map(function (synonym, index) {
            return (
              <span key={index} className="synonym-results">
                {" "}
                {synonym}
              </span>
            );
          })}
        </span>
      </div>
    );
  } else {
    return null;
  }
}
