import React from "react";
import PageFormat from "../../components/PageFormat/PageFormat";

const Location = (props) => {
  return (
    <>
      <div className="page">
        <PageFormat pageData={props.locationData} />
      </div>
    </>
  );
};

export default Location;
