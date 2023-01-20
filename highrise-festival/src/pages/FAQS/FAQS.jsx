import React from "react";
import FAQDropdown from "../../components/ui/FAQDropdown/FAQDropdown";

import "./FAQS.css";

const FAQS = (props) => {
  const getQuestions = () => {
    return props.faqData.map((obj, index, faqData) => {
      if (faqData.length - 1 === index) {
        return (
          <FAQDropdown
            key={`question ${index}`}
            question={obj.question}
            answer={obj.answer}
            index={index}
            last={true}
          />
        );
      } else {
        return (
          <FAQDropdown
            key={`question ${index}`}
            question={obj.question}
            answer={obj.answer}
            index={index}
            last={false}
          />
        );
      }
    });
  };

  return (
    <>
      <div className="page-wrapper page">
        <div className="faq-wrapper border-y-8 rounded-2xl border-rose-300/90 ">
          <h4 className="h4-title">FAQ's</h4>

          {getQuestions()}
        </div>
      </div>
    </>
  );
};

export default FAQS;
