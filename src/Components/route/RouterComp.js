import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import NotFound from "../NotFound/NotFound";
import Skills from "../Content/Skills";
import Education from "../Content/Education";
import Certificates from "../Content/Certificates";
import Projects from "../Content/Projects";
import Contact from "../Content/Contact";
import About from "../Content/About";
import Home from "../Content/Home";
const RouterComp = () => {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/Certificates" element={<Certificates />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default RouterComp;
