import React, { useRef, useState, useEffect } from "react";

import Card from "../Card/Card";

import "./pageFormat.css";

const PageFormat = (props) => {
  return (
    <div className="page-format-wrapper bg-[#ffffff50] border-b-[12px] border-black rounded-xl">
      <div
        className={`page-intro-wrapper  ${
          props.pageData.pageContent.pageIntro
            ? "sm:px-6 lg:px-32 pt-24 pb-2"
            : ""
        }`}
      >
        {props.pageData.title && (
          <h1 className="h4-title2">{props.pageData.title}</h1>
        )}
        {props.pageData.pageContent.pageIntro && (
          <p
            className={`page-intro text-center ${
              props.pageData.wellnessPage ? "sanctury" : ""
            }`}
          >
            {props.pageData.pageContent.pageIntro.map((line) => {
              return (
                <>
                  <span>{line}</span>
                  <br></br>
                  <br></br>
                </>
              );
            })}
          </p>
        )}
      </div>
      {props.pageData.pageContent.cards &&
        props.pageData.pageContent.cards.map((item, index, arr) => {
          const last = index === arr.length - 1 ? true : false;
          return (
            <>
              <Card
                cardData={item}
                key={"Card:" + index}
                left={index % 2 !== 0}
                last={last}
                isWellnessPage={props.pageData.wellnessPage}
              />
            </>
          );
        })}
    </div>
  );
};

export default PageFormat;
