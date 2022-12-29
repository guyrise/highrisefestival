import React from "react";
import beautifulForest1 from "../../../assets/images/deepAi festival images/beautiful-forest.jpeg";
import camping1 from "../../../assets/images/deepAi festival images/camping1.jpeg";
import camping2 from "../../../assets/images/deepAi festival images/camping2.jpeg";
import galaxyJungle from "../../../assets/images/deepAi festival images/galaxy-jungle1.jpeg";

import "./photogrid.css";
const PhotoGrid = () => {
  return (
    <div className="photo-btn-container">
      {/* grid-template-columns: 100px 50px 100px; grid-template-rows: 80px auto
      80px; column-gap: 10px; row-gap: 15px; */}
      <div>PhotoGrid</div>

      <div className="grid grid-cols-2 gap-4">
        <div className="photo-btn-box">
          <a>
            <img className="photo-btn" src={beautifulForest1}></img>
          </a>
        </div>
        <div className="photo-btn-box">
          <a>
            <img className="photo-btn" src={camping1}></img>
          </a>
        </div>
        <div className="photo-btn-box">
          <a>
            <img className="photo-btn" src={camping2}></img>
          </a>
        </div>
        <div className="photo-btn-box">
          <a>
            <img className="photo-btn" src={galaxyJungle}></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PhotoGrid;
