import React, { useState, useEffect, useRef } from "react";

import { gsap, Power3, Power1, Elastic } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// import { Controls, PlayState, Tween, Timeline } from "react-gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import navLogo from "../../../assets/images/HighriseLogoCropped.png";
import CoverSkyBg from "../../../assets/images/coverSkyBg.png";
import CoverBg from "../../../assets/images/coverBg.png";
import LeftStack from "../../../assets/images/leftStack.png";
import RightStack from "../../../assets/images/rightStack.png";
import TowerBlocksMg from "../../../assets/images/towerblocksMg.png";
import TrumpetsFg from "../../../assets/images/trumpetFg.png";
import CoverLogo from "../../../assets/images/highriseLogo.png";

import "./HeroHome.css";

const HeroHome = () => {
  const triggerRef = useRef(null);
  const otherRef = useRef(null);
  useEffect(() => {
    const trigger = triggerRef.current;
    gsap.to("#LS", {
      // left: "45vw",
      scale: 2,
      scrollTrigger: {
        trigger: trigger,
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: ".parallax-box",
        markers: true,
      },
    });
  }, []);

  //   const t1 = gsap.timeline();
  //   useEffect(() => {
  //     // t1.from(
  //     //   "#bg",
  //     //   { y: 500, opacity: 0, ease: Power3.easeOut, delay: 0.2 },
  //     //   "Start"
  //     // );
  //     t1.from(
  //       "#LS",
  //       { x: -500, opacity: 0, ease: Power3.easeOut, delay: 0.2 },
  //       "Start"
  //     );
  //     t1.from(
  //       "#RS",
  //       {
  //         x: 500,
  //         opacity: 0,
  //         ease: Power3.easeOut,
  //         stagger: 1,
  //       },
  //       "<"
  //     );
  //     t1.from("#mg", { opacity: 0, ease: Power1.easeOut, duration: 1.5 }, "<");
  //     t1.from(
  //       "#fg",
  //       {
  //         y: 500,
  //         opacity: 0,
  //         ease: Power3.easeOut,
  //         delay: 0.2,
  //       },
  //       "<"
  //     );
  //     t1.from(
  //       "#logo",
  //       {
  //         y: -500,
  //         opacity: 0,
  //         ease: Power3.easeOut,
  //         delay: 0.2,
  //       },
  //       ">"
  //     );
  //     t1.from(".festival", {
  //       scale: [5, 1],
  //       y: 1300,
  //       opacity: 0,
  //       ease: Circ.easeOut,
  //       duration: 0.9,
  //     });
  //   });

  // const [trigger, setTrigger] = useState(triggerRef.current);

  // useEffect(() => {
  //   // setTrigger(triggerRef.current);
  //   const element = triggerRef.current;
  //   const other = otherRef.current;
  //   gsap.fromTo(
  //     other,
  //     {
  //       y: "50px",
  //       scale: 1,
  //       duration: 2,
  //     },
  //     {
  //       y: "200px",
  //       scale: 1.8,
  //       ease: Power3.easeIn,
  //       scrollTrigger: {
  //         trigger: element,
  //         start: "top bottom",
  //         end: "bottom bottom",
  //         scrub: true,
  //         markers: true,
  //         pin: false,
  //       },
  //     }
  //   );
  // }, []);

  return (
    <div className="hero-home-wrapper" data-scroll-section data-scroll>
      <div className="parralax-box" triggerRef={triggerRef}>
        {/* <Timeline
          target={
            <>
              <img src={CoverSkyBg} id="sky-bg" alt="background2" />
              <img src={CoverBg} id="bg" alt="background1" />
              <img src={LeftStack} id="LS" alt="left speaker stack" />
              <img src={RightStack} id="RS" alt="right speaker stack" />
              <img src={TowerBlocksMg} id="mg" alt="towerblocks" />
              <img src={TrumpetsFg} id="fg" alt="trumpet foreground" />
              <img src={CoverLogo} id="logo" alt="highrise logo" />
              <h2 className="festival">Festival</h2>
            </>
          }
        >
          <Tween to={{ opacity: 1 }} target={1} />
          <Tween to={{ x: "40%" }} target={2} />
          <Tween to={{ x: "-40%" }} target={3} />
          <Tween to={{ opacity: 1 }} target={4} position={3} stagger={1.7} />
          <Tween to={{ y: "-30%" }} target={5} position={3} />
        </Timeline> */}
        <img
          src={CoverSkyBg}
          id="sky-bg"
          className=".test1"
          alt="background2"
        />
        <img src={CoverBg} id="bg" alt="background1" data-scroll />
        <img src={LeftStack} id="LS" alt="left speaker stack" data-scroll />
        <img src={RightStack} id="RS" alt="right speaker stack" data-scroll />
        <img src={TowerBlocksMg} id="mg" alt="towerblocks" data-scroll />
        <img src={TrumpetsFg} id="fg" alt="trumpet foreground" data-scroll />
        {/* <img ref={otherRef} src={CoverLogo} id="logo" alt="highrise logo" />
        <h2 className="festival">Festival</h2> */}
      </div>
    </div>
  );
};

{
  /* 
 WORKING TIMELINE RUDEMENTAL ANIMATION - NO SCROLL TRIGGER (PUT INSIDE PARALLAX BOX)
 <Timeline
          target={
            <>
              <img src={CoverSkyBg} id="sky-bg" alt="background2" />
              <img src={CoverBg} id="bg" alt="background1" />
              <img src={LeftStack} id="LS" alt="left speaker stack" />
              <img src={RightStack} id="RS" alt="right speaker stack" />
              <img src={TowerBlocksMg} id="mg" alt="towerblocks" />
              <img src={TrumpetsFg} id="fg" alt="trumpet foreground" />
              <img src={CoverLogo} id="logo" alt="highrise logo" />
              <h2 className="festival">Festival</h2>
            </>
          }
        >
          <Tween to={{ opacity: 1 }} target={1} />
          <Tween to={{ x: "40%" }} target={2} />
          <Tween to={{ x: "-40%" }} target={3} />
          <Tween to={{ opacity: 1 }} target={4} position={3} stagger={1.7} />
          <Tween to={{ y: "-30%" }} target={5} position={3} />
        </Timeline> */
}

// gsap.to("#bg", { duration: 2,y: 100 });

//gsap scroll trigger example

//   gsap.set('.main', {position:'fixed', background:'#fff', width:'100%', maxWidth:'1200px', height:'100%', top:0, left:'50%', x:'-50%'})
//   gsap.set('.scrollDist', {width:'100%', height:'200%'})
//   gsap.timeline({scrollTrigger:{trigger:'.scrollDist', start:'top top', end:'bottom bottom', scrub:1}})
//     .fromTo('.sky', {y:0},{y:-200}, 0)
//     .fromTo('.cloud1', {y:100},{y:-800}, 0)
//     .fromTo('.cloud2', {y:-150},{y:-500}, 0)
//     .fromTo('.cloud3', {y:-50},{y:-650}, 0)
//     .fromTo('.mountBg', {y:-10},{y:-100}, 0)
//     .fromTo('.mountMg', {y:-30},{y:-250}, 0)
//     .fromTo('.mountFg', {y:-50},{y:-600}, 0)

// $('#arrowBtn').on('mouseenter', (e)=>{ gsap.to('.arrow', {y:10, duration:0.8, ease:'back.inOut(3)', overwrite:'auto'}); })
// $('#arrowBtn').on('mouseleave', (e)=>{ gsap.to('.arrow', {y:0, duration:0.5, ease:'power3.out', overwrite:'auto'}); })
// $('#arrowBtn').on('click', (e)=>{ gsap.to(window, {scrollTo:innerHeight, duration:1.5, ease:'power1.inOut'}); }) // scrollTo requires the ScrollTo plugin (not to be confused w/ ScrollTrigger)

export default HeroHome;
