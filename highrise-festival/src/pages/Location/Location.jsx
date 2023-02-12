import React from "react";
import PageFormat from "../../components/ui/PageFormat/PageFormat";

const Location = (props) => {
  return (
    <>
      <div className="page-wrapper">
        <div className="page">
          <PageFormat pageData={props.locationData} />
        </div>
      </div>
    </>
  );
};

export default Location;
