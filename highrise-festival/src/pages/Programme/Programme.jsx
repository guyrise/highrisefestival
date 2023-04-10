import PhotoGrid from "../../components/ui/PhotoGrids/PhotoGrid.jsx";
import { motion } from "framer-motion";

const Programme = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
      exit={{ opacity: 0 }}
      className="page-wrapper"
    >
      <div className="page ">
        <PhotoGrid
          photoGrid={props.programmeData.photoGrid}
          heading="Programme"
        />
      </div>
    </motion.div>
  );
};

export default Programme;
