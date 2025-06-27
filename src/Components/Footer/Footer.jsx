import React from "react";

import logo from "../Assets/logo.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pintester_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="social-media-links">
        <div className="icon-container">
          <a href="#">
            <img src={instagram_icon} alt="" />
          </a>
        </div>
        <div className="icon-container">
          <a href="#">
            <img src={pintester_icon} alt="" />
          </a>
        </div>
        <div className="icon-container">
          <a href="#">
            <img src={whatsapp_icon} alt="" />
          </a>
        </div>
      </div>
      <div className="copy-right">
        <hr />
        <p>Copyright @ 2023 - All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
