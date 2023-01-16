import React from "react";
import Divider from "../../components/ui/Divider/Divider.jsx";
import PhotoGrid from "../../components/ui/PhotoGrid/PhotoGrid.jsx";

const Programme = (props) => {
  return (
    <div className="programme-wrapper">
      <div className="page h-auto">
        <PhotoGrid
          photoGrid={props.programmeData.photoGrid}
          heading="Programme"
        />
      </div>
      <Divider />
    </div>
  );
};

export default Programme;
