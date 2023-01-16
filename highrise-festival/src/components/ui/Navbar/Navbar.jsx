import React, { useState, useEffect, useRef } from "react";
import { gsap, Power3, Power1, Circ } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { NavLink, useLocation } from "react-router-dom";

// import { motion } from "framer-motion";

// images
import navLogo from "../../../assets/images/HighriseLogoCropped.png";
import arrow from "../../../assets/images/arrow-right.svg";

import "./navbar.css";

const Navbar = (props) => {
  const [isNavOpen, setNavOpen] = useState(false);
  const [pathname, setPathname] = useState(`${useLocation().pathname}`);

  return (
    <>
      <div className="master-nav">
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

          <nav
            className={"navbar1" + (isNavOpen ? " nav-open" : " nav-closed")}
          >
            {props.links.map((link, index) => (
              <li key={index}>
                <NavLink
                  style={({ isActive }) => {
                    return isActive ? { color: "hsl(53, 100%, 54%)" } : {};
                  }}
                  to={"/" + link}
                  className="relative"
                  data-glitch={link.toUpperCase().replace("-", " ")}
                >
                  {link.toUpperCase().replace("-", " ")}
                </NavLink>
              </li>
            ))}
          </nav>

          <div className="right-nav">
            <a
              href="https://fixr.co/event/highrise-festival-2023-tickets-811270693"
              id="ticket-link"
              target="_blank"
              rel="noopener noreferrer"
            >
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
        {location.pathname !== "/" && (
          <svg
            style={{ position: "sticky", top: "0", left: "0" }}
            id="visual"
            viewBox="0 0 2400 120"
            width="2400"
            height="120"
          >
            <defs>
              <linearGradient id="grad1" x1="7%" y1="0%" x3="100%" y3="0%">
                <stop
                  offset="7%"
                  style={{ stopColor: "rgb(235,115,120)", stopOpacity: "1" }}
                />

                <stop
                  offset="100%"
                  style={{
                    stopColor: "rgb(235, 114, 121)",
                    stopOpacity: "1",
                  }}
                />
              </linearGradient>
            </defs>

            <path
              d="M0 108L12.8 101.2C25.7 94.3 51.3 80.7 77.2 78.3C103 76 129 85 154.8 83.5C180.7 82 206.3 70 232.2 64.8C258 59.7 284 61.3 309.8 51.8C335.7 42.3 361.3 21.7 387.2 30.7C413 39.7 439 78.3 464.8 82C490.7 85.7 516.3 54.3 542 50C567.7 45.7 593.3 68.3 619.2 75C645 81.7 671 72.3 696.8 58.5C722.7 44.7 748.3 26.3 774.2 19.5C800 12.7 826 17.3 851.8 28.3C877.7 39.3 903.3 56.7 929 55.3C954.7 54 980.3 34 1006.2 38C1032 42 1058 70 1083.8 87.2C1109.7 104.3 1135.3 110.7 1161.2 110.5C1187 110.3 1213 103.7 1238.8 92.7C1264.7 81.7 1290.3 66.3 1316.2 63.7C1342 61 1368 71 1393.8 80.5C1419.7 90 1445.3 99 1471 100.7C1496.7 102.3 1522.3 96.7 1548.2 83.3C1574 70 1600 49 1625.8 49.2C1651.7 49.3 1677.3 70.7 1703.2 70.2C1729 69.7 1755 47.3 1780.8 45C1806.7 42.7 1832.3 60.3 1858 69.2C1883.7 78 1909.3 78 1935.2 72C1961 66 1987 54 2012.8 57.7C2038.7 61.3 2064.3 80.7 2090.2 91C2116 101.3 2142 102.7 2167.8 93.7C2193.7 84.7 2219.3 65.3 2245.2 66.3C2271 67.3 2297 88.7 2322.8 99.8C2348.7 111 2374.3 112 2387.2 112.5L2400 113L2400 0L2387.2 0C2374.3 0 2348.7 0 2322.8 0C2297 0 2271 0 2245.2 0C2219.3 0 2193.7 0 2167.8 0C2142 0 2116 0 2090.2 0C2064.3 0 2038.7 0 2012.8 0C1987 0 1961 0 1935.2 0C1909.3 0 1883.7 0 1858 0C1832.3 0 1806.7 0 1780.8 0C1755 0 1729 0 1703.2 0C1677.3 0 1651.7 0 1625.8 0C1600 0 1574 0 1548.2 0C1522.3 0 1496.7 0 1471 0C1445.3 0 1419.7 0 1393.8 0C1368 0 1342 0 1316.2 0C1290.3 0 1264.7 0 1238.8 0C1213 0 1187 0 1161.2 0C1135.3 0 1109.7 0 1083.8 0C1058 0 1032 0 1006.2 0C980.3 0 954.7 0 929 0C903.3 0 877.7 0 851.8 0C826 0 800 0 774.2 0C748.3 0 722.7 0 696.8 0C671 0 645 0 619.2 0C593.3 0 567.7 0 542 0C516.3 0 490.7 0 464.8 0C439 0 413 0 387.2 0C361.3 0 335.7 0 309.8 0C284 0 258 0 232.2 0C206.3 0 180.7 0 154.8 0C129 0 103 0 77.2 0C51.3 0 25.7 0 12.8 0L0 0Z"
              fill="url(#grad1)"
              // fill="black"
              strokeLinecap="round"
              strokeLinejoin="miter"
            ></path>
          </svg>
        )}
      </div>
    </>
  );
};

export default Navbar;
