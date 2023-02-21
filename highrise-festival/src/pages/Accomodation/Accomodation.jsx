import PageFormat2 from "../../components/ui/PageFormat/PageFormat2";
import PhotoGridHero from "../../components/ui/PhotoGrids/PhotoGridHero";
import FAQScomp from "../FAQS/FAQScomp";

const Accomodation = (props) => {
  return (
    <>
      <div className="page-wrapper">
        <div className="page">
          <PhotoGridHero
            photoGrid={props.accomodationData.photoGrid}
            heading={props.accomodationData.pageContent.heading}
          />
          <PageFormat2 pageData={props.accomodationData} />
          <div className="page-faqs section">
            <FAQScomp faqData={props.accomodationData.faqData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Accomodation;
