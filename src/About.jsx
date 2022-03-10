import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import about from "./about.png"

function About() {
  return (
    <>
      <div className="aboutMain">
        <div className="col-6">
        <h1 className="aboutTitle">About Me</h1>
        <br></br>
          <h3>
            Hi! My name is Anvita Mahajan. I'm a Btech Student pursuing degree
            in Computer Science from College of Engineering,Pune.
          </h3>
          <br/>
          <Button variant="outlined" className="learnMoreBtn"><Link to="/about/moreInfo">Learn More</Link></Button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Button variant="outlined" className="dwdResumeBtn">Download Resume</Button>
        </div>
        <div className="col-6">
        <img src={about} className="aboutImg"/>
        </div>
      </div>
      <hr></hr>
      <br/><br/><br/><br/><br/><br/><br/>
      <Footer></Footer>
    </>
  );
}

export default About;
