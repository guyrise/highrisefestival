import React, { useRef, useState, useEffect } from "react";

import Card from "../Card/Card";
import CardLongForm from "../Card/CardLongForm";
import CardLongForm2 from "../Card/CardLongForm2";

import "./pageFormat.css";

const PageFormat = (props) => {
  return (
    <div className="page-format-wrapper border-b-[12px] rounded-md border-black mt-8">
      {props.pageData.pageContent.cards &&
        props.pageData.pageContent.cards.map((item, index) => {
          let left = false;
          index % 2 !== 0 ? (left = true) : null;
          return (
            <>
              <CardLongForm2
                cardData={item}
                key={"Card:" + index}
                left={left}
                index={index}
                isWellnessPage={props.pageData.wellnessPage}
              />
            </>
          );
        })}
    </div>
  );
};

export default PageFormat;
