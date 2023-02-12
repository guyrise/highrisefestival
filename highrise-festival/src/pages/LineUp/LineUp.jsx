import React from "react";
import lineup1 from "../../assets/images/highrise-lineup-1st.png";

import { BsCircleFill } from "react-icons/bs";

import "./lineup.css";

const LineUp = (props) => {
  console.log(props);
  return (
    <>
      <div className="page-wrapper">
        {/* <div className="lineup-content text-center"> */}
        <img className="lineup-img" src={lineup1} />
        {/* <h1 className="mb-3 lineup-title">HIGHRISE FESTIVAL</h1>
          <h3 className="mb-3">7th-11th of September 2023</h3>
          <p className="text-3xl">
            {props.lineUpData.lineup.map((artist) => {
              return (
                <>
                  <span>{artist}</span>
                  <span>
                    <BsCircleFill />
                  </span>
                </>
              );
            })}
          </p> */}
      </div>
      {/* </div> */}
    </>
  );
};

export default LineUp;
