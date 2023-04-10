import Map from "../../components/ui/Map/Map";
import PageFormat from "../../components/ui/PageFormat/PageFormat";
import { useLoadScript } from "@react-google-maps/api";
import PhotoGridHero from "../../components/ui/PhotoGrids/PhotoGridHero";
import { motion } from "framer-motion";

const Location = (props) => {
  const { isLoaded } = useLoadScript({
    // googleMapsApiKey: "AIzaSyBXQweV-QuuHuC-zsTyfvoGYR4HRxP3cAY",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
      exit={{ opacity: 0 }}
      className="page-wrapper"
    >
      <div className="page">
        <PhotoGridHero
          photoGrid={props.locationData.photoGrid}
          heading={props.locationData.pageContent.heading}
        />

        <PageFormat pageData={props.locationData} />

        <div className="mt-20">
          <h3 className="mb-8">Where to find us...</h3>

          {isLoaded ? <Map /> : <div>Loading...</div>}
          <h3 className="mt-6 text-center">
            Grange Farm - Abbots Ripton, Huntingdon, PE28 2PH
          </h3>
        </div>
      </div>
    </motion.div>
  );
};

export default Location;
