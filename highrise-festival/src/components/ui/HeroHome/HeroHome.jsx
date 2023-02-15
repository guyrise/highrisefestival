import React, { useState, useEffect, useRef, Suspense } from "react";
import cover from "../../../assets/images/festival-logo-comp.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { Blurhash } from "react-blurhash";
import "./HeroHome.css";

const HeroHome = () => {
  return (
    <>
      <div className="home-hero-box1">
        <LazyLoadImage
          src={cover}
          className="home-hero-img"
          placeholder={
            <Blurhash
              hash="iQGS_ioz56n$bvaexCo3R4M,R*jYj?X8sCt6X8xZ5mj]-QjFVrWnMwaws;IVn$x@oLt6ofV@j]RQyskCMIf8rsaet8aeo#"
              width={""}
              height={"100%"}
              resolutionX={32}
              resolutionY={32}
              punch={1}
            />
          }
        />
        {/* <img className="home-hero-img" src={coverNew} loading="lazy" /> */}
      </div>
    </>
  );
};

export default HeroHome;
