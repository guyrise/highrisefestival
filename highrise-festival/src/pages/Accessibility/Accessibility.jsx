import React from "react";

import PhotoGridHero from "../../components/ui/PhotoGrids/PhotoGridHero";
import PageFormat from "../../components/ui/PageFormat/PageFormat";
import FAQScomp from "../FAQS/FAQScomp";

const Accessibility = (props) => {
  return (
    <>
      <div className="page-wrapper">
        <div className="page">
          <PhotoGridHero
            photoGrid={props.accessibilityData.photoGrid}
            heading={props.accessibilityData.pageContent.heading}
          />

          <PageFormat pageData={props.accessibilityData} />
          <div className="page-faqs section">
            <FAQScomp faqData={props.accessibilityData.faqData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Accessibility;
