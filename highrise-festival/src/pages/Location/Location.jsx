import React from "react";
import Map from "../../components/ui/Map/Map";
import PageFormat from "../../components/ui/PageFormat/PageFormat";
import { useLoadScript } from "@react-google-maps/api";

const Location = (props) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBXQweV-QuuHuC-zsTyfvoGYR4HRxP3cAY",
  });

  return (
    <>
      <div className="page-wrapper">
        <div className="page">
          <PageFormat pageData={props.locationData} />

          <div className="px-6">
            <h3 className="mb-3">Where to find us...</h3>
            {isLoaded ? <Map /> : <div>Loading...</div>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Location;
