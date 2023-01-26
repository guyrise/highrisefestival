import React from "react";
import Card from "../ui/Card/Card";

import "./pageFormat.css";

const PageFormat = (props) => {
  console.log(props);
  return (
    <div className="page-wrapper mt-8 pt-8">
      <div className="page-intro-wrapper p-12 bg-orange-300">
        <h4 className="h4-title2">{props.pageData.title}</h4>
        {props.pageData.pageIntro && (
          <p className="page-intro">{props.pageData.pageIntro}</p>
        )}
      </div>
      {props.pageData.pageContent.map((item, index) => {
        let left = false;
        index % 2 !== 0 ? (left = true) : null;
        return (
          <Card
            cardData={item}
            key={"Card:" + index}
            left={left}
            index={index}
          />
        );
      })}
    </div>
  );
};

export default PageFormat;
