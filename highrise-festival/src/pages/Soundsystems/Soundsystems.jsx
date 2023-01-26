import React from "react";
import PageFormat2 from "../../components/PageFormat/PageFormat2";

// pageData={props.soundsystemsData}

const Soundsystems = (props) => {
  return (
    <>
      <div className="page">
        <PageFormat2 pageData={props.soundsystemData} />
      </div>
    </>
  );
};

export default Soundsystems;
