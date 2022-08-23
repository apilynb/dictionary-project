import React from "react";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3 className="partOfSpeech">{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definition: </strong> {definition.definition}
              <br />
              <em>
                <strong>Example:</strong> {definition.example}
              </em>
            </p>
          </div>
        );
      })}
      <Synonyms synonyms={props.meaning.synonyms} />
      <Antonyms antonyms={props.meaning.antonyms} />
    </div>
  );
}
