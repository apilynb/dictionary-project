import React from "react";

export default function Photos(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <section className="Photos">
        <h2 className="text-start">
          {" "}
          Images of <em className="text-lowercase">{props.keyword}</em>
        </h2>
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4 mb-2 mt-2">
                <a href={photo.url} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    alt={photo}
                    key={index}
                    className="img-fluid"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
