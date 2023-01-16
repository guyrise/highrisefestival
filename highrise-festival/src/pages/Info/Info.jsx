import React from "react";
import PhotoGrid from "../../components/ui/PhotoGrid/PhotoGrid";

const Info = (props) => {
  return (
    <div className="info-wrapper page">
      <PhotoGrid photoGrid={props.infoData.photoGrid} heading="Info" />
    </div>
  );
};

export default Info;
