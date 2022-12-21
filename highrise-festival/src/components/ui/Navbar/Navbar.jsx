import React, { useState, useEffect, useRef } from "react";
import { gsap, Power3, Power1, Circ } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

import navLogo from "../../../assets/images/HighriseLogoCropped.png";

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
        <button id="tickets-btn">
          <a id="ticket-link">
            <span>Buy Tickets</span>
          </a>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
