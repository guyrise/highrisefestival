import { useMemo } from "react";
import { GoogleMap, MarkerF } from "@react-google-maps/api";
import highriseLogo from "../../../assets/images/Navbar/HighriseLogoCropped.webp";

import "./map.css";

const Map = () => {
  const center = useMemo(() => ({ lat: 52.36137, lng: -0.165745 }), []);

  const marker = useMemo(() => ({ lat: 52.37843, lng: -0.16538 }), []);

  return (
    <div className="map-wrapper">
      <GoogleMap
        zoom={12.8}
        center={center}
        mapContainerClassName="map-container"
      >
        <MarkerF
          position={marker}
          className=""
          icon={{
            url: highriseLogo,
            scaledSize: new google.maps.Size(75, 75),
          }}
        />
      </GoogleMap>
    </div>
  );
};

export default Map;
