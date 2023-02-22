import React from "react";
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

        <div className="my-6 px-6">
          <h3 className="mb-8">Where to find us...</h3>
          {isLoaded ? <Map /> : <div>Loading...</div>}
          <p className="p-12">
            Located just a 10 minute drive from huntingdon station there are
            plenty of ways to get here if you are travelling by train.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Location;
