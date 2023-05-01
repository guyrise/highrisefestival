import HighriseButton from "../Buttons/HighriseButton";

import "./pageFormat.css";

const PageFormat = (props) => {
  return (
    <div className="bg-[#ffffff50] border-b-[12px] rounded-md border-black">
      <div
        className={`page-intro-wrapper ${
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
      <div>
        {props.pageData.pageContent.body &&
          props.pageData.pageContent.body.map((section) => {
            return (
              <div>
                <hr className="divider"></hr>
                <h3 className="section-heading px-6 md:px-24 text-4xl text-center">
                  {section.heading}
                </h3>
                <p className="page-description text-center px-6 md:px-24 pt-8">
                  {section.description.map((sentence, i) => {
                    return (
                      <>
                        <span key={sentence + i}>{sentence}</span>
                        <br></br>
                        <br></br>
                      </>
                    );
                  })}
                </p>
                {section.link && (
                  <a href={section.link.address} target="_blank">
                    <HighriseButton
                      label={section.link.label}
                      fontSize={"text-2xl"}
                      type={"submit"}
                      padding={"px-4 py-2"}
                    />
                  </a>
                )}
              </div>
            );
          })}
      </div>
      <div className="page-description-wrapper py-6">
        <p className="page-description px-6 md:px-24 pt-12">
          {props.pageData.pageContent.description &&
            props.pageData.pageContent.description.map((sentence, i) => {
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
