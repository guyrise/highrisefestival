import { Link } from "react-router-dom";

import "./photogrid.css";
const PhotoGrid = (props) => {
  const photoGrid = props.photoGrid;

  return (
    <>
      <div className="photo-btn-container ">
        <div className="photogrid-wrapper-hero grid md:grid-cols-1">
          <h4 className="h4-title">{props.heading}</h4>
          {photoGrid.map((data, index) => {
            return (
              <div className="photo-btn-box-HERO" key={index}>
                <img className="photo-hero" src={`${data.image}`}></img>
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
