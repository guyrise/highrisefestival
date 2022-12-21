import React from "react";

import { CgFacebook } from "react-icons/cg";
import { IoLogoInstagram } from "react-icons/io";
import { AiOutlineTwitter } from "react-icons/ai";

import "./footer.css";

export default function Footer() {
  return (
    <footer className="highrise-footer">
      <div className="container mx-auto">
        <ul class="social-icons">
          <li>
            <a class="facebook" href="https://www.facebook.com/HighRiseEvents/">
              <CgFacebook />
            </a>
          </li>
          <li>
            <a class="twitter" href="#">
              <AiOutlineTwitter />
            </a>
          </li>
          <li>
            <a
              class="instagram"
              href="https://www.instagram.com/highrise.uk/?hl=en"
            >
              <IoLogoInstagram />
            </a>
          </li>
        </ul>
      </div>
      <div className="container mx-auto grid grid-flow-col">
        <div className="column">
          <h6>Festival</h6>
          <ul class="footer-links">
            <li>
              <a href="#">Abouts</a>
            </li>
            <li>
              <a href="#">Volunteer</a>
            </li>
            <li>
              <a href="#">Jobs</a>
            </li>
          </ul>{" "}
        </div>
        <div className="column">
          <h6>Communities</h6>
          <ul class="footer-links">
            <li>
              <a href="#">For Artists</a>
            </li>
            <li>
              <a href="#">Advertising</a>
            </li>
            <li>
              <a href="#">Vendors</a>
            </li>
          </ul>{" "}
        </div>
        <div className="column">
          <h6>Quick Links</h6>
          <ul class="footer-links">
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Contribute</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="container mx-auto grid grid-flow-col">
        <div className="column">
          <p class="copyright-text">
            Copyright &copy; 2021. All Rights Reserved by
            <a href="https://www.instagram.com/highrise.uk/?hl=en"> Highrise</a>
            .
          </p>
        </div>
        {/* <Col sm={12} md={6} xs={12}>
              <ul class="social-icons">
                <li><a class="facebook" href="#"><CgFacebook /></a></li>
                <li><a class="twitter" href="#"><AiOutlineTwitter /></a></li>
                <li><a class="instagram" href="#"><IoLogoInstagram /></a></li> 
              </ul>
            </Col> */}
      </div>
    </footer>
  );
}
