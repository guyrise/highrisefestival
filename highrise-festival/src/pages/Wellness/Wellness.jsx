import { motion } from "framer-motion";
import PageFormat2 from "../../components/ui/PageFormat/PageFormat2.jsx";

import PhotoGridHero from "../../components/ui/PhotoGrids/PhotoGridHero";

const Wellness = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
      exit={{ opacity: 0 }}
      className="page-wrapper"
    >
      <div className="page">
        <PhotoGridHero
          photoGrid={props.wellnessData.photoGrid}
          heading={props.wellnessData.pageContent.heading}
        />
        <PageFormat2 pageData={props.wellnessData} />
      </div>
    </motion.div>
  );
};

export default Wellness;
