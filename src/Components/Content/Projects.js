import React from "react";
import Header from "../Header/Header";
import "./Projects.css";
import ProjectsBanner from "../../Image/Project.jpg";
const Projects = () => {
  return (
    <>
      <Header />
      <div className="projectsContainer">
        <div className="projectsContent">
          <div className="projectsItems">
            <h1>Cominig Soon....</h1>
          </div>
          <div className="projectsItems">
            <img src={ProjectsBanner}></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
