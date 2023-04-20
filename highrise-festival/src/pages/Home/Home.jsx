import { useState } from "react";

import { motion } from "framer-motion";

import HeroHome from "../../components/ui/HeroHome/HeroHome.jsx";
import Paragraph from "./Paragraph.jsx";

import "./home.css";

const Home = (props) => {
  const [loading, setLoading] = useState(true);

  const imageLoad = () => {
    setLoading(false);
    return;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
      exit={{ opacity: 0 }}
      className="page-wrapper"
    >
      <HeroHome loading={imageLoad} />
      <h1 className="invisible">HIGHRISE FESTIVAL</h1>
      <hr className="divider"></hr>

      {!loading && (
        <div id="about-section">
          <h3 className="mt-8 text-center">
            {props.homeData.pageContent.heading}
          </h3>
          <div className="page flex flex-col items-center justify-center">
            {props.homeData.pageContent.description.map((paragraph, index) => {
              return <Paragraph key={`para-${index}`} paragraph={paragraph} />;
            })}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Home;
