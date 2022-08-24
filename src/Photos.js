import React from "react";

export default function Photos(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <section className="Photos">
        <h2 className="text-start">
          {" "}
          Images related to <em className="text-lowercase">{props.keyword}</em>
        </h2>

        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div key={index} className="col-4 mb-2 mt-2">
                <a href={photo.url} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    alt={photo}
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
