import React from "react";
import "./Footer.scss";
import { Logo } from "../../../assets";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-container-content">
          <div className="footer-container-content-prt1">
            <img src={Logo} alt="Logo-img" />
            <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
          </div>
          <div className="footer-container-content-prt2">
            <h5>Link</h5>
            <p>Overons</p>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contact</p>
          </div>
          <div className="footer-container-content-prt3">
            <h5>Company</h5>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Contact</p>
          </div>
          <div className="footer-container-content-prt4">
            <h5>Get in touch</h5>
            <p>Crechterwoord K12 182 DK Alknjkcb</p>
            <p>085-132567</p>
            <p>info@payme.net</p>
          </div>
        </div>
        <div className="footer-container-content2">
          © 2021 GPT-3. All rights reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
