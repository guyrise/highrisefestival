import React from "react";

import { useInView, observe } from "react-intersection-observer";

import "./home.css";

const Paragraph = (props) => {
  const {
    ref: paragraphRef,
    inView: visible,
    entry,
  } = useInView({
    /* Optional options */
    threshold: 0,
    rootMargin: "-10px",
    triggerOnce: true,
    fallbackInView: true,
  });

  return (
    <p
      ref={paragraphRef}
      className={`${
        visible ? "para-show" : ""
      } home-para px-52 text-center mb-8`}
    >
      {props.paragraph}
    </p>
  );
};

export default Paragraph;
