import React from "react";
import PageFormat2 from "../../components/PageFormat/PageFormat2";

// pageData={props.soundsystemsData}

const Soundsystems = (props) => {
  return (
    <>
      <div className="my-8 mx-32 py-3">
        <PageFormat2 pageData={props.soundsystemData} />
      </div>
    </>
  );
};

export default Soundsystems;
