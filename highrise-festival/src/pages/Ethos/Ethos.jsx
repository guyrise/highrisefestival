import PhotoGrid from "../../components/ui/PhotoGrids/PhotoGrid";
import { motion } from "framer-motion";

const Ethos = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
      exit={{ opacity: 0 }}
      className="page-wrapper"
    >
      <div className="page">
        <PhotoGrid photoGrid={props.ethosData.photoGrid} heading="Ethos" />
      </div>
    </motion.div>
  );
};

export default Ethos;
