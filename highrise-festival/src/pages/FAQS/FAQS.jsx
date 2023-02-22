import React from "react";
import FAQDropdown from "../../components/ui/FAQDropdown/FAQDropdown";
import { motion } from "framer-motion";
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
      exit={{ opacity: 0 }}
      className="page-wrapper"
    >
      <div className="page">
        <div className="faq-wrapper">
          <h4 className="h4-title">FAQ's</h4>

          {getQuestions()}
        </div>
      </div>
    </motion.div>
  );
};

export default FAQS;
