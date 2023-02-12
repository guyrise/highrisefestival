import React from "react";
import Newsletter from "../../components/form/Newsletter/Newsletter.jsx";

import HeroHome from "../../components/ui/HeroHome/HeroHome.jsx";

const Home = () => {
  return (
    <div className="page-wrapper">
      <HeroHome />

      {/* <div className=""></div> */}
      {/* <div className="bg flex justify-between items-center">
        <div className="paddingHERO"> */}
      <hr className="divider"></hr>
      <h3 className="my-8 text-center">ABOUT</h3>

      {/* <hr className="divider"></hr> */}
      <div className="page flex flex-col items-center justify-center">
        {/* <h3 className="mb-8">ABOUT</h3> */}
        <p className="px-52 text-center">
          After 10 years running multi-genre events across the country and
          opening our own club in Bristol, we are ready to take our next step
          into the festival world.<br></br>
          <br></br>
          Our festival will be set within the woodlands, fields and lakes of the
          legendary Secret Garden Party site. We are proud to be a fully
          independent and grassroots festival which is environmentally conscious
          and sustainability focused. We are a predominately vegetarian and
          vegan festival with all of our food & drink being locally sourced.
          There will be no single use plastic on-site and the majority of our
          power will come directly from the sun.
          <br></br>
          <br></br>
          We've hosting a weekend of live music, sound system culture, wellness
          and healing. Set across 20+ immersive medium, small and micro venues
          for your to explore. There will be no huge stages, instead we are
          focusing on intimate and immersive spaces with big sounds.
          <br></br>
        </p>
      </div>
    </div>
  );
};

export default Home;
