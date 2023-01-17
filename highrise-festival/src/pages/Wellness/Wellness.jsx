import React from "react";
import PageFormat from "../../components/PageFormat/PageFormat";

import FAQScomp from "../../pages/FAQS/FAQScomp";
import FAQData from "../../data/FAQPage.json";

const faqData = FAQData;
const Wellness = () => {
  return (
    <>
      <div className="page">
        <section>
          <PageFormat />
        </section>
        <section>
          <FAQScomp faqData={FAQData} />
        </section>
      </div>
    </>
  );
};

export default Wellness;
