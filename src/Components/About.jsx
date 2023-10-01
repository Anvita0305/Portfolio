import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import about from "./about.png";
import Resume from "../Resume/Anvita Mahajan.pdf";
import { Document, Page } from "react-pdf";

function About() {
  return (
    <>
      <div className="aboutMain">
        <div className="col-6">
          <h1 className="aboutTitle">About Me</h1>
          <br></br>
          <h5>
            Hello! My name is Anvita Mahajan. I'm a Btech Student pursuing a
            degree in Computer Science from College of Engineering,Pune. I like
            exploring new techstacks and keeps myself up to date with the latest
            developments in the fields. I have recently completed my Summer
            Internship at Hilti technology solutions in a project revolving
            around Java, SpringBoot, ReactJS and Postgresql. To know more about
            me, head on to learn more button!
          </h5>
          <br />
          <Button variant="outlined" className="learnMoreBtn">
            <Link to="/about/moreInfo">Learn More</Link>
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Button variant="outlined" className="dwdResumeBtn">
          <a href={Resume} target="_blank">
            Download Resume
            </a>
          </Button> 
        </div>
        <div className="col-6">
          <img src={about} className="aboutImg" />
        </div>
      </div>
      <hr></hr>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer></Footer>
    </>
  );
}

export default About;
