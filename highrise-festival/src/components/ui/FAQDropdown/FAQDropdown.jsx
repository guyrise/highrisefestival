import React, { useState } from "react";

import { motion } from "framer-motion";

const FAQDropdown = (props) => {
  const [isFAQOpen, setFAQOpen] = useState(false);

  return (
    <div
      className={
        "accordion-group border-y-4 border-rose-300/90 rounded-md " +
        (props.last ? "" : "mb-1")
      }
    >
      <div
        className={
          "accordion px-6 py-6 bg-rose-300/90 border-rose-300/90" +
          (isFAQOpen ? " border-b-2 " : "")
        }
      >
        <input
          type="checkbox"
          id={"toggle-" + props.index}
          className="accordion-toggle"
          aria-controls="faq"
          aria-expanded="false"
          defaultChecked={isFAQOpen}
          onClick={() => setFAQOpen(!isFAQOpen)}
        />
        <label htmlFor={"toggle-" + props.index} className="accordion-title ">
          {props.question}
        </label>
        <span className={"accordion-icon " + (isFAQOpen ? "icon-open" : "")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
          </svg>
        </span>
      </div>
      <motion.div
        className="accordion-content-wrapper"
        style={{ display: "none" }}
        animate={
          isFAQOpen
            ? {
                display: "block",
              }
            : {
                transitionEnd: {
                  display: "none",
                },
              }
        }
      >
        <div className="accordion-content bg-rose-200/80 p-6">
          <motion.p
            animate={isFAQOpen ? { opacity: 1 } : { opacity: 0 }}
            transition={{ opacity: { duration: 1, ease: "easeInOut" } }}
            className={"content " + (isFAQOpen ? " faq-open" : " faq-closed")}
          >
            {props.answer}
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default FAQDropdown;
