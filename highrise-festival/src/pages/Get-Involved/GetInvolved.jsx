import React from "react";
import PhotoGridHero from "../../components/ui/PhotoGrids/PhotoGridHero";
import PageFormat from "../../components/ui/PageFormat/PageFormat";
import PageFormat2 from "../../components/ui/PageFormat/PageFormat2";

const GetInvolved = (props) => {
  return (
    <div className="page-wrapper">
      <div className="page">
        <PhotoGridHero
          photoGrid={props.getInvolvedData.photoGrid}
          heading={props.getInvolvedData.pageContent.heading}
        />

        <PageFormat pageData={props.getInvolvedData} />
        <PageFormat2 pageData={props.getInvolvedData} />
      </div>
    </div>
  );
};

export default GetInvolved;
