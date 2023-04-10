import React, { useState } from "react";

import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion";

const FAQDropdown = (props) => {
  const { ref: faqRef, inView: visible } = useInView({
    /* Optional options */
    threshold: 0,
    // triggerOnce: true,
    rootMargin: "-30px",
    fallbackInView: true,
  });

  const [isFAQOpen, setFAQOpen] = useState(false);

  return (
    <div
      ref={faqRef}
      className={`${
        visible ? "show-faq" : ""
      } accordion-group  border-[#75C593] mb-1 rounded-2xl `}
    >
      <div
        className={`accordion bg-[#75C593] border-[#75C593] ${
          isFAQOpen ? " border-b-2 " : ""
        }`}
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
        <label htmlFor={"toggle-" + props.index} className="accordion-title">
          {props.question}
          <span className={"accordion-icon " + (isFAQOpen ? "icon-open" : "")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g transform="rotate(-90 12 12)">
                <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
              </g>
            </svg>
          </span>
        </label>
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
        <div className="accordion-content bg-green-200 p-6">
          {props.answer.map((sentence, index, answers) => {
            return (
              <motion.p
                animate={isFAQOpen ? { opacity: 1 } : { opacity: 0 }}
                transition={{ opacity: { duration: 1, ease: "easeInOut" } }}
                className={
                  "content " + (isFAQOpen ? " faq-open" : " faq-closed")
                }
              >
                {sentence}
              </motion.p>
            );
          })}
          {/* <motion.p
            animate={isFAQOpen ? { opacity: 1 } : { opacity: 0 }}
            transition={{ opacity: { duration: 1, ease: "easeInOut" } }}
            className={"content " + (isFAQOpen ? " faq-open" : " faq-closed")}
          > */}
          {/* {props.answer} */}

          {/* </motion.p> */}
        </div>
      </motion.div>
    </div>
  );
};

export default FAQDropdown;
