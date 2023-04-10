import FAQDropdown from "../../components/ui/FAQDropdown/FAQDropdown";

import "./FAQS.css";

const FAQScomp = (props) => {
  const getQuestions = () => {
    return props.faqData.map((obj, index, faqData) => {
      // if (faqData.length - 1 === index) {
      return (
        <FAQDropdown
          key={`question ${index}`}
          question={obj.question}
          answer={obj.answer}
          index={index}
          last={faqData.length - 1 === index ? true : false}
        />
      );
    });
  };

  return <>{getQuestions()}</>;
};

export default FAQScomp;
