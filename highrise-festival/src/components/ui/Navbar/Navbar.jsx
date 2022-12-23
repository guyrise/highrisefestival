import React, { useState, useEffect, useRef } from "react";
import { gsap, Power3, Power1, Circ } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// images
import navLogo from "../../../assets/images/HighriseLogoCropped.png";
import arrow from "../../../assets/images/arrow-right.svg";

import "./navbar.css";

const Navbar = (props) => {
  const [isNavOpen, setNavOpen] = useState(false);
  return (
    <header className="nav-wrapper" ref={props.propref} data-scroll-section>
      <div className="brand-logo" data-scroll>
        <a href="/">
          <img
            src={navLogo}
            className={
              "highrise-logo" + (isNavOpen ? " nav-open" : " nav-closed")
            }
            id="nav-logo"
            alt="highrise Logo"
            // ref={targetRef}
            style={{ width: "100px" }}
          />
        </a>
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

      <div className="right-nav">
        <a id="ticket-link">
          <span data-glitch={"Get Tickets"}>Get Tickets</span>
        </a>

        <div className="hamburger-wrapper">
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
        </div>
      </div>
    </header>
  );
};

export default Navbar;
