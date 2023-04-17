import { useState, useEffect, useRef, Suspense } from "react";
import ProgressiveImage from "react-progressive-graceful-image";
import cover from "../../../assets/images/Home/festival-logo-comp.webp";
import coverBlurred from "../../../assets/images/Home/festival-logo-comp-blurred.webp";

import "./HeroHome.css";

const HeroHome = (props) => {
  return (
    <>
      <div className="home-hero-box1">
        <ProgressiveImage src={cover} placeholder={coverBlurred}>
          {(src, loading) => (
            <img
              className={`home-hero-img ${loading ? "loading" : "loaded"}`}
              src={src}
              alt="highrise festival lineup"
              onLoad={props.loading}
            />
          )}
        </ProgressiveImage>
      </div>
    </>
  );
};

export default HeroHome;
