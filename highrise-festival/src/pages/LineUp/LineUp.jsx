import FinalLineUp from "../../assets/images/Programme/Lineup/FinalLineUp.webp";
// import FinalLineUpBlur from "../../assets/images/Programme/LineUp/FinalLineUpBlur.webp";
import FLB from "../../assets/images/Programme/Lineup/FinalLineUpBlur.webp";

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
      <ProgressiveImage src={FinalLineUp} placeholder={FLB}>
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
