import React from "react";
import Card from "../ui/Card/Card";

import "./pageFormat.css";

const PageFormat = (props) => {
  return (
    <div className="page-wrapper mt-8 pt-8">
      <h4 className="h4-title2">SoundSystems</h4>
      {props.pageData.pageContent.map((item, index) => {
        let left = false;
        index % 2 !== 0 ? (left = true) : null;
        return <Card cardData={item} key={"Card:" + index} left={left} />;
      })}
    </div>
  );
};

export default PageFormat;
