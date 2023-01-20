import React from "react";
import PageFormat from "../../components/PageFormat/PageFormat";

const Accomodation = (props) => {
  return (
    <>
      <div className="page">
        <PageFormat pageData={props.accomodationData} />
      </div>
    </>
  );
};

export default Accomodation;
