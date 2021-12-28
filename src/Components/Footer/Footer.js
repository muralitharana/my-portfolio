import React from "react";
import "./Footer.css";
import { FaLinkedinIn, FaPhone, FaMailBulk } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerItems">
        <h3>Address</h3>
        <address>
          Thangavel nagar Pattukkottai,
          <br />
          Thanjavur(DT).
        </address>
      </div>
      <hr/>
      <div className="footerItems">
        <h3>About </h3>
        <p>I am a Full Stack Web developer</p>
      </div>
      <hr/>
      <div className="footerItems">
        <h3>Contact</h3>
         <a
              className="linkedInHome"
              href="https://www.linkedin.com/in/muralitharan-a-a49805204"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>
            <a className="phoneHome" href="tel:9715161520">
              <FaPhone />
            </a>
            <a className="emailHome" href="mailto:amuralitharan14@gmail.com">
              <FaMailBulk />
            </a>
      </div>
    </div>
  );
};

export default Footer;
