import PageFormat2 from "../../components/ui/PageFormat/PageFormat2";
import PhotoGridHero from "../../components/ui/PhotoGrids/PhotoGridHero";
import FAQScomp from "../FAQS/FAQScomp";
import { motion } from "framer-motion";

const Travel = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
      exit={{ opacity: 0 }}
      className="page-wrapper"
    >
      <div className="page">
        <PhotoGridHero
          photoGrid={props.travelData.photoGrid}
          heading={props.travelData.pageContent.heading}
        />
        <PageFormat2 pageData={props.travelData} />
      </div>
    </motion.div>
  );
};

export default Travel;
