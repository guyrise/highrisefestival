import React from "react";
import PhotoGrid from "../../components/ui/PhotoGrid/PhotoGrid";

const Ethos = (props) => {
  return (
    <div className="ethos-wrapper page">
      <PhotoGrid photoGrid={props.ethosData.photoGrid} heading="Ethos" />
    </div>
  );
};

export default Ethos;
