import React from "react";
import Header from "../Header/Header";
import "./Home.css";
import myBanner from "../../Image/myBanner.jpg";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaPhone, FaMailBulk } from "react-icons/fa";
import { useState, useEffect } from "react";
import profile from "../../Image/profile.jpg"
const Home = () => {
  const [name, setName] = useState("");
  useEffect(() => {
    setTimeout(()=>typing(), 500);
  }, []);
  let str = "Muralitharan A ";
  let i = 0;
  let newStr = "";
  const typing = () => {
    if (i < str.length) {
      newStr += str[i];
      setName(newStr);
      i++;
      setTimeout(typing, 100);
    }
  };

  return (
    <>
      <Header />
      <div className="homeContainer">
        <div className="contentHome">
          <div className="contentItems">
            <div className="myPicture">
              <img src={profile}/>
            </div>
            <h1 className="h1Home">
              Hi,This is <b id="name">{name}</b>
              <div className="typer"></div>
            </h1>
            <h1 className="h1Home">Full Stack Developer</h1>
            <div className="contactDiv">
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
            <div className="skillsDiv">
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
              <ul>
                <Link
                  style={{
                    backgroundColor: "rgb(170,0,250)",
                    textDecoration: "none",
                    color: "white",
                    borderRadius: "10px",
                    padding: "10px",
                  }}
                  to="/my-portfolio/Skills"
                >
                  See more
                </Link>
              </ul>
            </div>
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
