import React from "react";
import PhotoGrid from "../../components/ui/PhotoGrids/PhotoGrid";

const Info = (props) => {
  return (
    <div className="page-wrapper">
      <div className="page">
        <PhotoGrid photoGrid={props.infoData.photoGrid} heading="Info" />
      </div>
    </div>
  );
};

export default Info;
