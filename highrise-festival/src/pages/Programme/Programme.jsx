import React from "react";
import PhotoGrid from "../../components/ui/PhotoGrids/PhotoGrid.jsx";

const Programme = (props) => {
  return (
    <div className="programme-wrapper">
      <div className="page ">
        <PhotoGrid
          photoGrid={props.programmeData.photoGrid}
          heading="Programme"
        />
      </div>
    </div>
  );
};

export default Programme;
