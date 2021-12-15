import React from "react";
import Header from "../Header/Header";
import "./About.css";
const About = () => {
  return (
    <>
      <Header />
      <div className="aboutContainer">
        <div className="aboutContent">
          <div className="aboutItems">
              <h2 style={{textAlign:"center"}}>Cover Letter</h2>
            <p>
              Dear Hiring Manager,
              <br /><br />
              I am writing to express my interest in the opening for this
              position.
              <br /><br />I have completed my graduation and now I pursuing Full Stack
              Development course at Besant technologies. I have hands on
              experience in HTML CSS JavaScript ReactJS NodeJs Express MongoDB
              Git and GitHub.
              <br /> <br />
              I am also attracted to this role because of the growth
              opportunities that your company provides. The research that I’ve
              done on your company’s culture shows that there are ample
              opportunities for self-motivated individuals like me.
              <br /> <br />
              I look forward to sharing more details of my experience and
              motivations with you. Thank you for your consideration.
              <br /> <br />
              Sincerely,
              <br />
              Muralitharan A.
            </p>
          </div>
          <div className="aboutItems"></div>
        </div>
      </div>
    </>
  );
};

export default About;
