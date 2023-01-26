import React from "react";
import Newsletter from "../../components/form/Newsletter/Newsletter";
import PageFormat from "../../components/PageFormat/PageFormat";
import PageFormat2 from "../../components/PageFormat/PageFormat2.jsx";
import Divider from "../../components/ui/Divider/Divider.jsx";

const Wellness = (props) => {
  return (
    <>
      <div className="page">
        <PageFormat2 pageData={props.wellnessData} />
      </div>
      <Newsletter />
    </>
  );
};

export default Wellness;
