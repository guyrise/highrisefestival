import React from "react";

import "./pageFormat.css";

const PageFormat = (props) => {
  return (
    <div>
      <div className="page-description-wrapper py-6">
        <p className="page-description px-24 pt-12">
          {props.pageData.pageContent.description.map((sentence) => {
            return (
              <>
                {sentence}
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
