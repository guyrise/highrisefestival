import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { CgFacebook } from "react-icons/cg";
import { IoLogoInstagram } from "react-icons/io";
import { AiOutlineTwitter } from "react-icons/ai";

import "./footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer-wrapper">
        <svg id="footer-border" viewBox="0 275.37 2400 125.63">
          <path
            d="M0 326L16 322.5C32 319 64 312 96 302.2C128 292.3 160 279.7 192 281.7C224 283.7 256 300.3 288 320.3C320 340.3 352 363.7 384 362.3C416 361 448 335 480 333.7C512 332.3 544 355.7 576 346.3C608 337 640 295 672 281C704 267 736 281 768 302.2C800 323.3 832 351.7 864 352.2C896 352.7 928 325.3 960 318.7C992 312 1024 326 1056 332.8C1088 339.7 1120 339.3 1152 335.7C1184 332 1216 325 1248 331.8C1280 338.7 1312 359.3 1344 349C1376 338.7 1408 297.3 1440 298.8C1472 300.3 1504 344.7 1536 348.7C1568 352.7 1600 316.3 1632 297.7C1664 279 1696 278 1728 280.5C1760 283 1792 289 1824 302.5C1856 316 1888 337 1920 337C1952 337 1984 316 2016 303.8C2048 291.7 2080 288.3 2112 303.8C2144 319.3 2176 353.7 2208 365.2C2240 376.7 2272 365.3 2304 349.7C2336 334 2368 314 2384 304L2400 294L2400 401L2384 401C2368 401 2336 401 2304 401C2272 401 2240 401 2208 401C2176 401 2144 401 2112 401C2080 401 2048 401 2016 401C1984 401 1952 401 1920 401C1888 401 1856 401 1824 401C1792 401 1760 401 1728 401C1696 401 1664 401 1632 401C1600 401 1568 401 1536 401C1504 401 1472 401 1440 401C1408 401 1376 401 1344 401C1312 401 1280 401 1248 401C1216 401 1184 401 1152 401C1120 401 1088 401 1056 401C1024 401 992 401 960 401C928 401 896 401 864 401C832 401 800 401 768 401C736 401 704 401 672 401C640 401 608 401 576 401C544 401 512 401 480 401C448 401 416 401 384 401C352 401 320 401 288 401C256 401 224 401 192 401C160 401 128 401 96 401C64 401 32 401 16 401L0 401Z"
            fill="#549b6e"
            strokeLinecap="round"
            strokeLinejoin="miter"
          ></path>
        </svg>
        {/* <footer className="highrise-footer bg-gradient-to-b from-[#FC623F] to-[#FD967F]"> */}
        <footer className="highrise-footer bg-gradient-to-b from-[#549b6e] to-[#78c896]">
          <div className="mx-auto social-icons-box">
            <ul className="social-icons">
              <li>
                <a
                  className="facebook"
                  href="https://www.facebook.com/HighRiseEvents/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CgFacebook />
                </a>
              </li>
              <li>
                <a
                  className="twitter"
                  href="https://www.twitter.com/HighRise_Events"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li>
                <a
                  className="instagram"
                  href="https://www.instagram.com/highrise.uk/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoInstagram />
                </a>
              </li>
            </ul>
          </div>

          <div className="grid md:grid-cols-3">
            <div className="link-box mb-6">
              <h6>Festival</h6>
              <ul className="footer-links">
                <li>
                  <HashLink smooth to="/#about-section">
                    About
                  </HashLink>
                </li>
                <li>
                  <Link to="/faqs">FAQs</Link>
                </li>
                <li>
                  <a href="mailto:info@highrisehq.com">Contact</a>
                </li>
              </ul>{" "}
            </div>
            <div className="link-box mb-6">
              <h6>Communities</h6>
              <ul className="footer-links">
                <li>
                  <Link to="/get-involved">Volunteer</Link>
                </li>
                <li>
                  <Link to="/Ethos">Ethos</Link>
                </li>
                <li>
                  <Link to="/info/accessibility">Accessibility</Link>
                </li>
              </ul>
            </div>
            <div className="link-box mb-6">
              <h6>Legals</h6>
              <ul className="footer-links">
                <li>
                  <Link to="/privacy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms-and-conditions">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="/credits">Credits</Link>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="mx-auto grid grid-flow-col">
            <div className="flex justify-evenly">
              <p className="copyright-text">
                Copyright &copy; 2023 All Rights Reserved by&nbsp;
                <a
                  href="https://www.instagram.com/highrise.uk/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Highrise Festival
                </a>
                .
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
