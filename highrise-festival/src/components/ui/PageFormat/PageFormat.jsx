import React from "react";

import "./pageFormat.css";

const PageFormat = (props) => {
  return (
    <div>
      <div className="page-description-wrapper py-6">
        <p className="page-description px-6 md:px-24 pt-12">
          {props.pageData.pageContent.description.map((sentence, i) => {
            return (
              <>
                <span key={sentence + i}>{sentence}</span>
                <br></br>
                <br></br>
              </>
            );
          })}
        </p>
      </div>
    </div>
  );
};

export default PageFormat;
