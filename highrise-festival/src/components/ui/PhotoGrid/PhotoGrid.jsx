import React from "react";

import { Link } from "react-router-dom";

import "./photogrid.css";
const PhotoGrid = (props) => {
  const photoGrid = props.photoGrid;
  console.log(photoGrid);
  return (
    <>
      <div className="another-box">
        <div className="photo-btn-container">
          {/* <div>
            <h3 className="h3-title">PhotoGrid</h3>
          </div> */}
          <div className="photogrid-wrapper">
            <h3 className="h3-title">Programme</h3>
            <div className="photogrid grid  md:grid-cols-2">
              {photoGrid.map((data, index) => {
                return (
                  <div className="photo-btn-box border-t-8 border-b-8 border-highriseYellow md:border-none">
                    <Link
                      to={
                        "/programme/" +
                        data.label.toLowerCase().replace(" ", "-")
                      }
                    >
                      <img
                        //   border-t-8 border-b-8 border-highrisePink md:border-none
                        className="photo-btn "
                        src={`${data.image}`}
                      ></img>
                      <h3 className="h3-overlay">{data.label}</h3>
                    </Link>
                    <a></a>
                  </div>
                );
              })}
              {/* <div className="photo-btn-box">
                <a>
                  <img
                    className="photo-btn border-b-8 border-highrisePink md:border-none"
                    src={beautifulForest1}
                  ></img>
                  <h3 className="h3-overlay">Line Up</h3>
                </a>
              </div>
              <div className="photo-btn-box">
                <a>
                  <img
                    className="photo-btn border-b-8 border-highrisePink md:border-none"
                    src={camping1}
                  ></img>
                  <h3 className="h3-overlay">Venues</h3>
                </a>
              </div>
              <div className="photo-btn-box">
                <a>
                  <img
                    className="photo-btn border-b-8 border-highrisePink md:border-none"
                    src={camping2}
                  ></img>
                  <h3 className="h3-overlay">SoundSystems</h3>
                </a>
              </div>
              <div className="photo-btn-box">
                <a>
                  <img
                    className="photo-btn border-b-8 border-highrisePink md:border-none"
                    src={galaxyJungle}
                  ></img>
                  <h3 className="h3-overlay">Wellness</h3>
                </a>
              </div> */}
            </div>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          //   id="border-mask"
        >
          <clipPath id="border-mask">
            <path
              fill="#0099ff"
              fillOpacity="1"
              d="M0,96L120,128C240,160,480,224,720,218.7C960,213,1200,139,1320,101.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            ></path>
          </clipPath>
        </svg>

        {/*  
        <svg
        //   id="ewCferU0Dix1"
        //   style={{ position: "absolute" }}
        >
          <defs>
            <clipPath id="title-mask">
              <path
                d="M549.362393,269.881753C483.978669,333.178762,417.899374,240.667749,300,240.667749c-126.401348,0-207.628102,109.20473-249.362393,29.214004C-34.22212,134.245306,12.397704,-13.215859,99.327614,20.171574c88.337584,59.12358,129.402433-1.081538,200.672386,0c93.629769,1.420852,105.379087,69.557153,200.672386,0c75.121725-41.734291,114.073731,186.41317,48.690007,249.710179Z"
                fill="none"
                stroke="#3f5787"
                strokeWidth="1.2"
              />
            </clipPath>
          </defs>
        </svg> */}
      </div>
    </>
  );
};

export default PhotoGrid;
