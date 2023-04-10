import { motion } from "framer-motion";

import PhotoGridHero from "../../components/ui/PhotoGrids/PhotoGridHero";
import PageFormat from "../../components/ui/PageFormat/PageFormat";
import FAQScomp from "../FAQS/FAQScomp";

const Accessibility = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
      exit={{ opacity: 0 }}
      className="page-wrapper"
    >
      <div className="page">
        <PhotoGridHero
          photoGrid={props.accessibilityData.photoGrid}
          heading={props.accessibilityData.pageContent.heading}
        />

        <PageFormat pageData={props.accessibilityData} />
        {/* <div className="page-faqs section mt-8">
          <FAQScomp faqData={props.accessibilityData.faqData} />
        </div> */}
      </div>
    </motion.div>
  );
};

export default Accessibility;
