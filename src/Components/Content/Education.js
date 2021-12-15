import React from "react";
import Header from "../Header/Header";
import "./Education.css";
import EducationBanner from "../../Image/Educations.jpg";
const Education = () => {
  return (
    <>
      <Header />
      <div className="educationContainer">
        <div className="educationContent">
          <div className="educationItems">
            <ul>
              <li className="standard">
                Bachelor of Science in Electronics (77%)
              </li>
              <li className="collageName">
                PSG College Of Arts &#38; Science{" "}
              </li>
            </ul>
            <ul>
              <li className="standard">
                12<sup>th</sup> STD (89.91%)
              </li>
              <li className="collageName">
                Laurel Higher Secondary School
              </li>
            </ul>
            <ul>
              <li className="standard">
                10<sup>th</sup> STD (90.2%)
              </li>
              <li className="collageName">
                Laurel Higher Secondary School
              </li>
            </ul>
          </div>
          
          <div className="educationItems">
            <img src={EducationBanner} alt="Eduaction image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
