import React from "react";
import PageFormat2 from "../../components/PageFormat/PageFormat2";

const Venues = (props) => {
  return (
    <>
      <div className="page">
        <PageFormat2 pageData={props.venuesData} />
      </div>
    </>
  );
};

export default Venues;
