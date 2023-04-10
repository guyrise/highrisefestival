import React, { useState, useEffect, useMemo } from "react";

import { NavLink, useLocation } from "react-router-dom";

// import { motion } from "framer-motion";

// images
import navLogo from "../../../assets/images/Navbar/HighriseLogoCropped.webp";

import "./navbar.css";

const Navbar = (props) => {
  const { pathname } = useLocation();
  const [isNavOpen, setNavOpen] = useState(false);
  const [navColor, setNavColor] = useState(false);
  const [threshold, setThreshold] = useState(60);
  // const [pathname, setPathname] = useState(`${useLocation().pathname}`);
  const [mousePos, setMousePos] = useState({ x: "", y: "" });
  const [offset, setOffset] = useState(0);

  function mouseTrack(e) {
    const x = `${e.clientX - 100}px`;
    const y = `${e.clientY + 20}px`;
    setMousePos({
      x: x,
      y: y,
    });
  }

  useEffect(() => {
    if (pathname === "/programme/line-up") {
      setNavColor(true);
      setThreshold(0);
    } else {
      setNavColor(false);
      setThreshold(60);
    }
  }, [pathname]);

  useEffect(() => {
    if (window.scrollY >= threshold && navColor !== true) {
      setNavColor(true);
    }
    if (window.scrollY < threshold && navColor !== false) {
      setNavColor(false);
    }
  }, [window.scrollY]);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="master-nav">
        <header
          className={`${
            navColor
              ? "nav-wrapper bg-gradient-to-t from-[#549b6e] to-[#78c896]"
              : "nav-wrapper"
          }`}
          ref={props.propref}
          data-scroll-section
        >
          <div className="flex ">
            <div className="brand-logo" data-scroll onMouseMove={mouseTrack}>
              <a href="/">
                <img
                  src={navLogo}
                  className={`highrise-logo ${
                    isNavOpen ? "nav-open" : "nav-closed"
                  }
              `}
                  id="nav-logo"
                  alt="highrise Logo"
                  style={{ width: "100px" }}
                />
              </a>

              <span
                className="tooltip"
                style={{ left: mousePos.x, top: mousePos.y }}
              >
                Home
              </span>
            </div>

            <div className="nav-date-box flex flex-col justify-center ">
              <h6 className="nav-date">7th - 11th September 2023</h6>
              <h6 className="nav-location">Grange Farm</h6>
            </div>
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
                  onClick={() => setNavOpen(!isNavOpen)}
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
                className="nav-toggle"
                onChange={() => setNavOpen(!isNavOpen)}
                checked={isNavOpen}
              />

              <div className="hamburger">
                <div></div>
              </div>
            </div>
          </div>
        </header>
        {location.pathname !== "/" && (
          <svg id="nav-border" viewBox="0 0 2400 50">
            <path
              d="M0 15L12.8 15.3C25.7 15.7 51.3 16.3 77.2 16.3C103 16.3 129 15.7 154.8 13.7C180.7 11.7 206.3 8.3 232.2 8.2C258 8 284 11 309.8 15.3C335.7 19.7 361.3 25.3 387.2 25.2C413 25 439 19 464.8 19.8C490.7 20.7 516.3 28.3 542 32C567.7 35.7 593.3 35.3 619.2 31.3C645 27.3 671 19.7 696.8 19.8C722.7 20 748.3 28 774.2 30.7C800 33.3 826 30.7 851.8 28.8C877.7 27 903.3 26 929 21.8C954.7 17.7 980.3 10.3 1006.2 13.5C1032 16.7 1058 30.3 1083.8 35.8C1109.7 41.3 1135.3 38.7 1161.2 33.7C1187 28.7 1213 21.3 1238.8 19.8C1264.7 18.3 1290.3 22.7 1316.2 28C1342 33.3 1368 39.7 1393.8 39.5C1419.7 39.3 1445.3 32.7 1471 30.3C1496.7 28 1522.3 30 1548.2 28.2C1574 26.3 1600 20.7 1625.8 22.3C1651.7 24 1677.3 33 1703.2 35C1729 37 1755 32 1780.8 30.3C1806.7 28.7 1832.3 30.3 1858 33.2C1883.7 36 1909.3 40 1935.2 42.2C1961 44.3 1987 44.7 2012.8 41.5C2038.7 38.3 2064.3 31.7 2090.2 28.5C2116 25.3 2142 25.7 2167.8 22.3C2193.7 19 2219.3 12 2245.2 8.8C2271 5.7 2297 6.3 2322.8 6.7C2348.7 7 2374.3 7 2387.2 7L2400 7L2400 0L2387.2 0C2374.3 0 2348.7 0 2322.8 0C2297 0 2271 0 2245.2 0C2219.3 0 2193.7 0 2167.8 0C2142 0 2116 0 2090.2 0C2064.3 0 2038.7 0 2012.8 0C1987 0 1961 0 1935.2 0C1909.3 0 1883.7 0 1858 0C1832.3 0 1806.7 0 1780.8 0C1755 0 1729 0 1703.2 0C1677.3 0 1651.7 0 1625.8 0C1600 0 1574 0 1548.2 0C1522.3 0 1496.7 0 1471 0C1445.3 0 1419.7 0 1393.8 0C1368 0 1342 0 1316.2 0C1290.3 0 1264.7 0 1238.8 0C1213 0 1187 0 1161.2 0C1135.3 0 1109.7 0 1083.8 0C1058 0 1032 0 1006.2 0C980.3 0 954.7 0 929 0C903.3 0 877.7 0 851.8 0C826 0 800 0 774.2 0C748.3 0 722.7 0 696.8 0C671 0 645 0 619.2 0C593.3 0 567.7 0 542 0C516.3 0 490.7 0 464.8 0C439 0 413 0 387.2 0C361.3 0 335.7 0 309.8 0C284 0 258 0 232.2 0C206.3 0 180.7 0 154.8 0C129 0 103 0 77.2 0C51.3 0 25.7 0 12.8 0L0 0Z"
              fill={`${navColor ? "#549b6e" : "rgba(0,0,0,0)"}`}
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
