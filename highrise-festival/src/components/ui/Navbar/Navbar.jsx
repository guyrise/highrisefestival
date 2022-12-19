import React, { useState, useEffect, useRef } from "react";
import { gsap, Power3, Power1, Circ } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

import navLogo from "../../../assets/images/HighriseLogoCropped.png";

import "./navbar.css";

const Navbar = (props) => {
  const [isNavOpen, setNavOpen] = useState(false);

  // const triggerRef = useRef(null);
  // const targetRef = useRef(null);
  // useEffect(() => {
  //   // setTrigger(triggerRef.current);
  //   const element = triggerRef.current;
  //   const target = targetRef.current;
  //   gsap.to(".highrise-logo", {
  //     x: "670px",
  //     y: "350px",
  //     scale: 5,
  //     // ease: Power3.easeIn,
  //     scrollTrigger: {
  //       trigger: ".parallax-box",
  //       start: "bottom center",
  //       end: "500px",
  //       scrub: true,
  //       pin: true,
  //       markers: true,
  //     },
  //   });
  // }, []);
  return (
    <header className="nav-wrapper" ref={props.propref} data-scroll-section>
      <div className="brand-logo">
        <a href="/">
          <img
            src={navLogo}
            className="highrise-logo"
            id="nav-logo"
            alt="highrise Logo"
            // ref={targetRef}
            style={{ width: "100px" }}
          />
        </a>
      </div>

      <input
        aria-controls="navbar"
        aria-expanded="false"
        type="checkbox"
        defaultChecked={isNavOpen}
        className="nav-toggle"
        onClick={() => setNavOpen(!isNavOpen)}
      />
      <div className="hamburger">
        <div></div>
      </div>

      <nav className={"navbar" + (isNavOpen ? " nav-open" : " nav-closed")}>
        {props.links.map((link, index) => (
          <li key={index}>
            <Link
              to={"/" + link}
              className="relative"
              data-glitch={link.toUpperCase().replace("-", " ")}
            >
              {link.toUpperCase().replace("-", " ")}
            </Link>
          </li>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
