import { useMemo } from "react";
import { GoogleMap, MarkerF } from "@react-google-maps/api";
import highriseLogo from "../../../assets/images/HighriseLogoCropped.webp";

import "./map.css";

const Map = () => {
  const center = useMemo(() => ({ lat: 52.360689, lng: -0.169179 }), []);
  const marker = useMemo(() => ({ lat: 52.37843, lng: -0.16538 }), []);

  return (
    <div className="map-wrapper">
      <GoogleMap
        zoom={13}
        center={center}
        mapContainerClassName="map-container"
        mapTypeId="hybrid"
      >
        <MarkerF
          position={marker}
          className=""
          icon={{
            url: highriseLogo,
            scaledSize: new google.maps.Size(50, 50),
          }}
        />
      </GoogleMap>
    </div>
  );
};

export default Map;
