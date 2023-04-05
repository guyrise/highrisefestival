import { motion } from "framer-motion";
import PhotoGridHero from "../../components/ui/PhotoGrids/PhotoGridHero";
import PageFormat from "../../components/ui/PageFormat/PageFormat";

const Vision = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
      exit={{ opacity: 0 }}
      className="page-wrapper"
    >
      <div className="page">
        <PhotoGridHero
          photoGrid={props.visionData.photoGrid}
          heading={props.visionData.pageContent.heading}
        />
        <PageFormat pageData={props.visionData} />
      </div>
    </motion.div>
  );
};

export default Vision;
