import React from "react";
import PageFormat from "../../components/PageFormat/PageFormat";

const Wellness = (props) => {
  return (
    <>
      <div className="page">
        <PageFormat pageData={props.wellnessData} />
      </div>
    </>
  );
};

export default Wellness;
