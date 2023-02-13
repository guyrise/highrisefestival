import React from "react";
import Newsletter from "../../components/form/Newsletter/Newsletter.jsx";

import HeroHome from "../../components/ui/HeroHome/HeroHome.jsx";

import { useInView } from "react-intersection-observer";

import "./home.css";
import Paragraph from "./Paragraph.jsx";

const Home = (props) => {
  return (
    <div className="page-wrapper">
      <HeroHome />

      <hr className="divider"></hr>
      <h3 className="my-8 text-center">{props.homeData.pageContent.heading}</h3>

      <div className="page flex flex-col items-center justify-center">
        {props.homeData.pageContent.description.map((paragraph, index) => {
          return <Paragraph key={`para-${index}`} paragraph={paragraph} />;
        })}
      </div>
    </div>
  );
};

export default Home;
