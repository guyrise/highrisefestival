import React from "react";
import Newsletter from "../../form/Newsletter/Newsletter";
import Card from "../Card/Card";
import Divider from "../Divider/Divider";

import "./pageFormat.css";

const PageFormat = (props) => {
  const wellnessPage = props.pageData.wellnessPage;
  return (
    <div className="page-format-wrapper mt-8 pt-8">
      <div
        className={`page-intro-wrapper ${
          props.pageData.pageContent.pageIntro
            ? "sm:px-6 lg:px-32 pt-16 pb-2"
            : ""
        }`}
      >
        {props.pageData.title && (
          <h4 className="h4-title2">{props.pageData.title}</h4>
        )}
        {props.pageData.pageContent.pageIntro && (
          <p
            className={`page-intro text-center ${
              wellnessPage ? "sanctury" : ""
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
        props.pageData.pageContent.cards.map((item, index) => {
          let left = false;
          index % 2 !== 0 ? (left = true) : null;
          return (
            <>
              <Card
                cardData={item}
                key={"Card:" + index}
                left={left}
                index={index}
                wellnessPage={wellnessPage}
              />
            </>
          );
        })}
    </div>
  );
};

export default PageFormat;
