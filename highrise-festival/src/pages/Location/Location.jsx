import React from "react";
import Map from "../../components/ui/Map/Map";
import PageFormat from "../../components/ui/PageFormat/PageFormat";
import { useLoadScript } from "@react-google-maps/api";
import PhotoGridHero from "../../components/ui/PhotoGrids/PhotoGridHero";

const Location = (props) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBXQweV-QuuHuC-zsTyfvoGYR4HRxP3cAY",
  });

  return (
    <>
      <div className="page-wrapper">
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
      </div>
    </>
  );
};

export default Location;
