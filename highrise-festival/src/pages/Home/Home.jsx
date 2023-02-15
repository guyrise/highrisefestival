import { Suspense } from "react";
import Newsletter from "../../components/form/Newsletter/Newsletter.jsx";

import HeroHome from "../../components/ui/HeroHome/HeroHome.jsx";

import { useInView } from "react-intersection-observer";

import "./home.css";
import Paragraph from "./Paragraph.jsx";
import LoadingLogo from "../../components/helpers/LoadingLogo/LoadingLogo.jsx";
import { Blurhash } from "react-blurhash";

const Home = (props) => {
  return (
    <div className="page-wrapper">
      <Suspense
        fallback={
          <Blurhash
            // className="home-hero-img"
            hash="iQGS_ioz56n$bvaexCo3R4M,R*jYj?X8sCt6X8xZ5mj]-QjFVrWnMwaws;IVn$x@oLt6ofV@j]RQyskCMIf8rsaet8aeo#"
            width={"100%"}
            height={"100%"}
            resolutionX={32}
            resolutionY={32}
            punch={1}
          />
        }
      >
        <HeroHome />
      </Suspense>
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
