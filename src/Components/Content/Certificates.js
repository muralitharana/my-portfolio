import React from "react";
import "./Certificates.css";
import Header from "../Header/Header";
import CertificatesBanner from "../../Image/Certificates.jpg";
const Certificates = () => {
  return (
    <>
      <Header />
      <div className="certificatesContainer">
        <div className="certificatesContent">
          <div className="certificatesItems">
            <h2 style={{textIndent:"2%"}}>Certificates Details</h2>
            <ul>
              <li className="courseName">Full Stack Course(MERN)</li>
              <li className="courseBy">Besant Technologies(Pursuing)</li>
            </ul>
            <ul>
              <li className="courseName">Crash Course on Python</li>
              <li className="courseBy">Coursera (Completed)</li>
            </ul>
            <ul>
              <li className="courseName">C for Everyone Fundamentals</li>
              <li className="courseBy">Coursera (Completed)</li>
            </ul>
          </div>
          <div className="certificatesItems">
            <img src={CertificatesBanner} alt="Certificates Image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Certificates;
