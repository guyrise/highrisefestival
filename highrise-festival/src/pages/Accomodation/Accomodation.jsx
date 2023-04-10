import PageFormat2 from "../../components/ui/PageFormat/PageFormat2";
import PhotoGridHero from "../../components/ui/PhotoGrids/PhotoGridHero";
import FAQScomp from "../FAQS/FAQScomp";
import { motion } from "framer-motion";

const Accomodation = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
      exit={{ opacity: 0 }}
      className="page-wrapper"
    >
      <div className="page">
        <PhotoGridHero
          photoGrid={props.accomodationData.photoGrid}
          heading={props.accomodationData.pageContent.heading}
        />
        <PageFormat2 pageData={props.accomodationData} />
        {/* <div className="page-faqs section">
          <FAQScomp faqData={props.accomodationData.faqData} />
        </div> */}
      </div>
    </motion.div>
  );
};

export default Accomodation;
