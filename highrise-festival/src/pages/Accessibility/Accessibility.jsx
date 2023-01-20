import React from "react";
import PageFormat from "../../components/PageFormat/PageFormat";

const Accessibility = (props) => {
  return (
    <>
      <div className="page">
        <PageFormat pageData={props.accessibilityData} />
      </div>
    </>
  );
};

export default Accessibility;
