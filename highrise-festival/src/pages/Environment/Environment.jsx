import { motion } from "framer-motion";
import PhotoGridHero from "../../components/ui/PhotoGrids/PhotoGridHero";
import PageFormat from "../../components/ui/PageFormat/PageFormat";

const Environment = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
      exit={{ opacity: 0 }}
      className="page-wrapper"
    >
      <div className="page">
        <PhotoGridHero
          photoGrid={props.environmentData.photoGrid}
          heading={props.environmentData.pageContent.heading}
        />
        <PageFormat pageData={props.environmentData} />
      </div>
    </motion.div>
  );
};

export default Environment;
