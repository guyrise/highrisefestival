import React from "react";
import PageFormat2 from "../../components/ui/PageFormat/PageFormat2";
import PhotoGridHero from "../../components/ui/PhotoGrids/PhotoGridHero";
import FAQScomp from "../FAQS/FAQScomp";

const Travel = (props) => {
  return (
    <>
      <div className="page-wrapper">
        <div className="page">
          <PhotoGridHero
            photoGrid={props.travelData.photoGrid}
            heading={props.travelData.pageContent.heading}
          />
          <PageFormat2 pageData={props.travelData} />
          <div className="page-faqs section">
            <FAQScomp faqData={props.travelData.faqData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Travel;
