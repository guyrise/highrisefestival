import React from "react";
import PhotoGrid from "../../components/ui/PhotoGrids/PhotoGrid";

const Ethos = (props) => {
  return (
    <div className="page-wrapper">
      <div className="page">
        <PhotoGrid photoGrid={props.ethosData.photoGrid} heading="Ethos" />
      </div>
    </div>
  );
};

export default Ethos;
