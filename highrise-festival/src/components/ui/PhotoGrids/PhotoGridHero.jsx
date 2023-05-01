import { Link } from "react-router-dom";

import ProgressiveImage from "react-progressive-graceful-image";

import "./photogrid.css";
const PhotoGrid = (props) => {
  const photoGrid = props.photoGrid;

  return (
    <>
      <div className="photo-btn-container ">
        <div className="photogrid-wrapper-hero grid md:grid-cols-1">
          <h1 className="h4-title">{props.heading}</h1>
          {photoGrid.map((data, index) => {
            return (
              <div className="photo-btn-box-HERO">
                <ProgressiveImage src={data.image} placeholder={data.blur}>
                  {(src, loading) => (
                    <img
                      className={`photo-hero aspect-square md:aspect-[1.5/1] lg:aspect-[2/1] ${
                        loading ? "loading" : "loaded"
                      }`}
                      src={src}
                      alt={data.alt}
                    />
                  )}
                </ProgressiveImage>

                <h3 className="h3-overlay">{data.label}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PhotoGrid;
