import React from "react";
import lineup1 from "../../assets/images/highrise-lineup-1st.webp";
import lineupBlurred from "../../assets/images/highrise-lineup-blurred.webp";
import { motion } from "framer-motion";
import ProgressiveImage from "react-progressive-graceful-image";

import "./lineup.css";

const LineUp = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
      exit={{ opacity: 0 }}
      className="page-wrapper"
    >
      <ProgressiveImage src={lineup1} placeholder={lineupBlurred}>
        {(src, loading) => (
          <img
            className={`lineup-img ${loading ? "loading" : "loaded"}`}
            src={src}
            alt="highrise-lineup"
          />
        )}
      </ProgressiveImage>
    </motion.div>
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
