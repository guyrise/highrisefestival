import FAQDropdown from "../../components/ui/FAQDropdown/FAQDropdown";
import { motion } from "framer-motion";
import "./FAQS.css";

const FAQS = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
      exit={{ opacity: 0 }}
      className="page-wrapper"
    >
      <div className="page">
        <div className="faq-wrapper">
          <h1 className="h4-title">FAQ's</h1>

          {props.faqData &&
            props.faqData.map((obj, index) => {
              return (
                <FAQDropdown
                  key={`question ${index}`}
                  question={obj.question}
                  answer={obj.answer}
                  index={index}
                />
              );
            })}
        </div>
      </div>
    </motion.div>
  );
};

export default FAQS;
