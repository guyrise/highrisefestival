import PageFormat2 from "../../components/ui/PageFormat/PageFormat2";
import { motion } from "framer-motion";
const Venues = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
      exit={{ opacity: 0 }}
      className="page-wrapper"
    >
      <div className="page">
        <PageFormat2 pageData={props.venuesData} />
      </div>
    </motion.div>
  );
};

export default Venues;
