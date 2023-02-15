import React from "react";
import lineup1 from "../../assets/images/highrise-lineup-1st.webp";

import "./lineup.css";

const LineUp = (props) => {
  return (
    <>
      <div className="page-wrapper">
        <img className="lineup-img" src={lineup1} />
      </div>
    </>
  );
};

export default LineUp;

// built from scratch version

{
  /* <h1 className="mb-3 lineup-title">HIGHRISE FESTIVAL</h1>
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
          </p> */
}
