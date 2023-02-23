import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import HighriseButton from "../../components/ui/Buttons/HighriseButton";

const Page404 = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
      exit={{ opacity: 0 }}
      id="404"
      className="flex flex-col justify-center lg:py-8 xl:px-24"
    >
      <div className="page-wrapper">
        <div className="page">
          <h1 className="mb-12 text-center">404 PAGE</h1>
          <p className="text-center px-8 mb-12">
            Sorry, the url you are searching for does not exist or is under
            maintenance.
            <br></br>
            <br></br>
            You can use the navigation bar above to find the page you're looking
            for, or you can go back to the previous page you were on by clicking
            the button below:
          </p>
          <div className=" mb-24">
            <HighriseButton
              label={"Go Back"}
              fontSize={"text-3xl"}
              padding={"px-6 py-6"}
              onClick={() => navigate(-1)}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Page404;
