import React from "react";

import { Link } from "react-router-dom";

import "./photogrid.css";
const PhotoGrid = (props) => {
  const photoGrid = props.photoGrid;
  const length = photoGrid.length;
  const divBy2 =
    length % 3 === 0 && length == 6
      ? 4
      : length % 3 === 0
      ? 3
      : length % 2 === 0
      ? 2
      : 1;

  return (
    <>
      <div className="photo-btn-container">
        <div
          className={`photogrid-wrapper grid ${
            divBy2 === 2
              ? "md:grid-cols-2"
              : divBy2 === 3
              ? "md:grid-cols-3"
              : divBy2 === 4
              ? "md:grid-cols-2" + " 2xl:grid-cols-3"
              : "auto-cols-auto"
          }`}
        >
          <h3 className="h3-title">{props.heading}</h3>
          {photoGrid.map((data, index) => {
            return (
              <div className="photo-btn-box">
                <Link
                  to={
                    "/programme/" + data.label.toLowerCase().replace(" ", "-")
                  }
                >
                  <img className="photo-btn " src={`${data.image}`}></img>
                  <h3 className="h3-overlay">{data.label}</h3>
                </Link>
                <a></a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PhotoGrid;
