import React from "react";
import Header from "../Header/Header";
import "./Contact.css";
import { FaLinkedinIn, FaPhone, FaMailBulk } from "react-icons/fa";
const Contact = () => {
  return (
    <>
      <Header />
      <div className="contactContainer">
        <div className="contactContent">
          <div className="contactItems">
            <ul>
              <li className="contactDetail">Mobile</li>
              <li className="contactValue">
                <a className="phone" href="tel:9715161520">
                  <FaPhone />
                </a>{" "}
              </li>
            </ul>
            <ul>
              <li className="contactDetail">Email</li>
              <li className="contactValue">
                <a className="email" href="mailto:amuralitharan14@gmail.com">
                  <FaMailBulk />
                </a>
              </li>
            </ul>
            <ul>
              <li className="contactDetail">LinkedIn</li>
              <li className="contactValue">
                <a className="linkedIn" href="https://www.linkedin.com/in/muralitharan-a-a49805204">
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </div>
          <div className="contactItems">
              <h2>
                  Will Update
              </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
