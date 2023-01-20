import React from "react";
import PageFormat from "../../components/PageFormat/PageFormat";

const Travel = (props) => {
  return (
    <>
      <div className="page">
        <PageFormat pageData={props.travelData} />
      </div>
    </>
  );
};

export default Travel;
