import React from "react";
import PhotoGrid from "../../components/ui/PhotoGrid/PhotoGrid.jsx";
// import beautifulForest1 from "../../../assets/images/deepAi festival images/beautiful-forest.jpeg";
// import camping1 from "../../../assets/images/deepAi festival images/camping1.jpeg";
// import camping2 from "../../../assets/images/deepAi festival images/camping2.jpeg";
// import galaxyJungle from "../../../assets/images/deepAi festival images/galaxy-jungle1.jpeg";
const Programme = (props) => {
  // const labels = ["Line Up, Venues, Soundsystems, Wellness"];
  return (
    <div className="programme-wrapper page">
      {/* <h1 style={{ color: "red" }}>Programme</h1> */}
      <PhotoGrid photoGrid={props.programmeData.photoGrid} />
    </div>
  );
};

export default Programme;
