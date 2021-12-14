import React from "react";
import Header from "../Header/Header";
import "./Skills.css";
import SkillsBanner from "../../Image/Skills.jpg";
import { useState } from "react";
const Skills = () => {
  const [skillsStrength, setSkillsStrength] = useState({
    html: "Intermediate",
    css: "Intermediate",
    javascript: "Intermediate",
    react: "Intermediate",
    redux: "Beginner",
    bootstrap: "Beginner",
    nodejs: "Beginner",
    express: "Beginner",
    mongodb: "Intermediate",
    gitGitHub: "Beginner",
  });
  return (
    <>
      <Header />
      <div className="skillsContainer">
        <div className="skillsContent">
          <div className="skillsItems">
            <ul>
              <li>
                HTML<strong>{skillsStrength.html}</strong>
              </li>
              <li>
                CSS<strong>{skillsStrength.css}</strong>
              </li>
              <li>
                JAVASCRIPT<strong>{skillsStrength.javascript}</strong>
              </li>
              <li>
                REACTJS<strong>{skillsStrength.react}</strong>
              </li>
              <li>
                NODEJS<strong>{skillsStrength.nodejs}</strong>
              </li>
              <li>
                EXPRESSJS<strong>{skillsStrength.express}</strong>
              </li>
              <li>
                MONGODB<strong>{skillsStrength.mongodb}</strong>
              </li>
              <li>
                REDUX<strong>{skillsStrength.redux}</strong>
              </li>
              <li>
                BOOTSTARP<strong>{skillsStrength.bootstrap}</strong>
              </li>
            </ul>
          </div>
          <div className="skillsItems">
            <img src={SkillsBanner} alt="skillsImg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
