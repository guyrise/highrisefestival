import React, { useState } from "react";

import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

import navLogo from "../../../assets/images/HighriseLogo(cropped).png";

import "./navbar.css";

const Navbar = (props) => {
  const [isNavOpen, setNavOpen] = useState(true);

  return (
    <header className="nav-wrapper">
      <div className="brand-logo">
        <a href="/">
          <img
            src={navLogo}
            className="highrise-logo"
            id="nav-logo"
            alt="highrise Logo"
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
