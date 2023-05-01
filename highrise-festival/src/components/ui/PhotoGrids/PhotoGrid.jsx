import { useState } from "react";

import ProgressiveImage from "react-progressive-graceful-image";

import { Link, useLocation } from "react-router-dom";

import "./photogrid.css";

const PhotoGrid = (props) => {
  const { pathname } = useLocation();
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
      <div className="photo-btn-container mb-2">
        <div
          className={`photogrid-wrapper grid grid-column-end:-1  ${
            divBy2 === 2
              ? "md:grid-cols-2"
              : divBy2 === 3
              ? "md:grid-cols-3"
              : divBy2 === 4
              ? "md:grid-cols-2" + " 2xl:grid-cols-3"
              : "md:grid-cols-2"
          }`}
        >
          <h1 className="h4-title">{props.heading}</h1>
          {photoGrid.map((data, index, grid) => {
            let last = "";
            if (index === grid.length - 1 && divBy2 == 1) {
              last = "col-span-full";
            }
            return (
              <div className={`photo-btn-box ${last}`} key={index}>
                <Link
                  to={`${pathname}/${data.label
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  <ProgressiveImage src={data.image} placeholder={data.blur}>
                    {(src, loading) => (
                      <img
                        className={`photo-btn ${
                          loading ? "loading" : "loaded"
                        }`}
                        src={src}
                        alt={data.alt}
                      />
                    )}
                  </ProgressiveImage>
                  <h3 className="h3-overlay">{data.label}</h3>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PhotoGrid;
