import React, { useState, useEffect, useRef, Suspense } from "react";
import cover from "../../../assets/images/festival-logo-comp.webp";

import "./HeroHome.css";

const HeroHome = ({ loading }) => {
  return (
    <>
      <div className="home-hero-box1">
        <img src={cover} className="home-hero-img" onLoad={loading} />
      </div>
    </>
  );
};

export default HeroHome;
