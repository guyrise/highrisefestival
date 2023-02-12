import React from "react";
import PageFormat2 from "../../components/ui/PageFormat/PageFormat2";

const Venues = (props) => {
  return (
    <>
      <div className="page-wrapper">
        <div className="page">
          <PageFormat2 pageData={props.venuesData} />
        </div>
      </div>
    </>
  );
};

export default Venues;
