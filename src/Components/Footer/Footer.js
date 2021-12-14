import React from "react";
import "./Footer.css";
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
      <div className="footerItems">
        <h3>About </h3>
        <p>I am a Full Stack Web developer</p>
      </div>
      <div className="footerItems">
        <h3>Contact</h3>
        Phone 9715**1520
        <br />
        Email{" "}
        <a href="mailto:amuralitharan14@gmail.com">amuralitharan14@gmail.com</a>
      </div>
    </div>
  );
};

export default Footer;
