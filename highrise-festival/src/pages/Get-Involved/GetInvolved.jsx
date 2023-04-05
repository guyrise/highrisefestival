import PhotoGridHero from "../../components/ui/PhotoGrids/PhotoGridHero";
import PageFormat from "../../components/ui/PageFormat/PageFormat";
import PageFormat3 from "../../components/ui/PageFormat/PageFormat3";
import { motion } from "framer-motion";

const GetInvolved = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
      exit={{ opacity: 0 }}
      className="page-wrapper"
    >
      <div className="page">
        <PhotoGridHero
          photoGrid={props.getInvolvedData.photoGrid}
          heading={props.getInvolvedData.pageContent.heading}
        />

        <PageFormat pageData={props.getInvolvedData} />
        {/* <PageFormat3 pageData={props.getInvolvedData} /> */}
      </div>
    </motion.div>
  );
};

export default GetInvolved;
