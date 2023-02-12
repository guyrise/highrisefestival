import React from "react";
import Newsletter from "../../components/form/Newsletter/Newsletter";
import PageFormat from "../../components/ui/PageFormat/PageFormat";
import PageFormat2 from "../../components/ui/PageFormat/PageFormat2.jsx";
import Divider from "../../components/ui/Divider/Divider.jsx";
import PhotoGridHero from "../../components/ui/PhotoGrids/PhotoGridHero";

const Wellness = (props) => {
  return (
    <>
      <div className="page-wrapper">
        <div className="page">
          <PhotoGridHero
            photoGrid={props.wellnessData.photoGrid}
            heading={props.wellnessData.pageContent.heading}
          />
          <PageFormat2 pageData={props.wellnessData} />
        </div>
      </div>
    </>
  );
};

export default Wellness;
