import { Suspense, useState } from "react";

import HeroHome from "../../components/ui/HeroHome/HeroHome.jsx";

import { useInView } from "react-intersection-observer";

import "./home.css";
import Paragraph from "./Paragraph.jsx";

const Home = (props) => {
  const [loading, setLoading] = useState(true);

  const imageLoad = () => {
    setLoading(false);
    return;
  };

  console.log(loading);
  return (
    <div className="page-wrapper">
      <HeroHome loading={imageLoad} />

      <hr className="divider"></hr>

      {!loading && (
        <div id="about-section">
          <h3 className="my-8 text-center">
            {props.homeData.pageContent.heading}
          </h3>
          <div className="page flex flex-col items-center justify-center">
            {props.homeData.pageContent.description.map((paragraph, index) => {
              return <Paragraph key={`para-${index}`} paragraph={paragraph} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
