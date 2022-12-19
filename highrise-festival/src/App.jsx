import { useState, useEffect, useRef } from "react";
import "./index.css";
import Navbar from "./components/ui/Navbar/Navbar";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";

import { gsap, Power3, Power1, Elastic } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

gsap.registerPlugin(ScrollTrigger);
function App() {
  const links = ["info", "programme", "faqs", "get-involved"];

  // REFS
  const containerRef = useRef(null);
  const triggerRef = useRef(null);

  // const t1 = gsap.timeline();

  // useEffect(() => {
  //   const t1 = gsap.timeline({
  //     pin: ".parralax-box",
  //     scrollTrigger: {
  //       scrub: true,
  //       start: "top top",
  //       end: "+=300%",
  //       markers: true,
  //     },
  //   });
  //   t1.fromTo(
  //     "#LS",
  //     { x: -500, ease: Elastic },
  //     { x: 0, ease: Elastic },
  //     "Start"
  //   );
  //   t1.from(
  //     "#RS",
  //     {
  //       x: 500,
  //       opacity: 0,
  //       ease: Power3.easeOut,
  //       // stagger: 1,
  //     },
  //     "Start"
  //   );
  //   t1.from("#mg", { opacity: 0, ease: Power1.easeOut }, "Start");
  //   t1.from(
  //     "#fg",
  //     {
  //       y: -500,
  //       opacity: 0,
  //       ease: Power3.easeOut,
  //     },
  //     "Start"
  //   );
  // });

  // useEffect(() => {
  //   // setTrigger(triggerRef.current);
  //   const element = triggerRef.current;
  //   gsap.to(".brand-logo", {
  //     left: "45vw",
  //     top: "45vh",
  //     scale: 5,
  //     scrollTrigger: {
  //       trigger: element,
  //       start: "top top",
  //       end: "bottom top",
  //       scrub: true,
  //       pin: true,
  //       markers: true,
  //     },
  //   });
  // }, []);

  const options = {
    smooth: true,
    multiplier: 3,
    smartphone: {
      smooth: true,
    },
  };

  return (
    <LocomotiveScrollProvider options={options} containerRef={containerRef}>
      <main data-scroll-container ref={containerRef}>
        <Navbar links={links} propref={triggerRef} />
        <Routes>
          {/* {links.map(link, index) => {

        }} */}
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} /> */}
        </Routes>
      </main>
    </LocomotiveScrollProvider>
  );
}

export default App;
