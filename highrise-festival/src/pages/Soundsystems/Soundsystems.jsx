import React from "react";
import PageFormat2 from "../../components/ui/PageFormat/PageFormat2";

// pageData={props.soundsystemsData}

const Soundsystems = (props) => {
  return (
    <>
      <div className="page-wrapper">
        <div className="page">
          <PageFormat2 pageData={props.soundsystemData} />
        </div>
      </div>
    </>
  );
};

export default Soundsystems;
