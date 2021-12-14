import React from "react";
import Header from "../Header/Header";
import "./Home.css";
import myBanner from "../../Image/myBanner.jpg";
import Footer from "../Footer/Footer";
const Home = () => {
  return (
    <>
      <Header />
      <div className="homeContainer">
        <div className="contentHome">
          <div className="contentItems">
            <h1 className="h1Home">
              Hi,This is <b>Muralitharan A</b>
            </h1>
            <h1 className="h1Home">Full Stack Developer</h1>
            <h2 className="h2Home">Skill Highlights</h2>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>ReactJS</li>
              <li>BootStrap</li>
            </ul>
            <ul>
              <li>NodeJS</li>
              <li>ExpressJS</li>
              <li>MongoDB</li>
              <li>GIT</li>
              <li>GITHUB</li>
            </ul>
          </div>
          <div className="contentItems">
            <img src={myBanner} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
