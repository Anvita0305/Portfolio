import React from "react";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import ReactIcon from "../Images/React-icon.svg.png";
import NodeIcon from "../Images/Node.js_logo.svg";
import ExpressIcon from "../Images/expressjs.png";
import Springbooticon from "../Images/springboot.png";
import Bootstrapicon from "../Images/bootstrap.jpg";
import CIcon from "../Images/c.png";
import CppIcon from "../Images/cpp.png";
import JavaIcon from "../Images/java.png";
import PythonIcon from "../Images/python.jpg";
import Mysqlicon from "../Images/mysql.png";
import PostgresIcon from "../Images/postgresql.png";
import MongoDBIcon from "../Images/mongodb.jpg";
import { useNavigate } from "react-router-dom";

function MoreInfo() {
  const navigate = useNavigate();
  return (
    <>
    <div style={{display:"flex",justifyContent:"center"}}>
      <button className="btn btn-primary" onClick={()=>{navigate('/about')}}>Go Back</button>
    </div>
      <div className="aboutMeCards">
        <div className="col-6">
          <h3>Education</h3>
          <ul>
            <li>
              B.Tech : College of Engineering, Pune ,2024 (CGPA: 8.83 upto 6th
              semester)
            </li>
            <li>HSC : Sir Parshurambhau College, 2020 (95.33% PCM)</li>
            <li>SSC : S.P.M English School, 2018 (98%)</li>
          </ul>
        </div>

        <h3>Skills</h3>
        <div>
          <hr></hr>
          <h5 style={{ textAlign: "center" }}>Web Development</h5>
          <br></br>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img src={ReactIcon} height="60px" width="70rem"></img>
              <label>ReactJS</label>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img src={NodeIcon} height="60px" width="70rem"></img>
              <label>NodeJS</label>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img src={ExpressIcon} height="60px" width="70rem"></img>
              <label>ExpressJs</label>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img src={Springbooticon} height="60px" width="70rem"></img>
              <label>SpringBoot</label>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img src={Bootstrapicon} height="60px" width="70rem"></img>
              <label>Bootstrap</label>
            </div>
          </div>
          <hr></hr>
          <h5 style={{ textAlign: "center" }}>Programming Languages</h5>
          <br></br>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img src={CIcon} height="60px" width="70rem"></img>
              <label>C</label>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img src={CppIcon} height="60px" width="70rem"></img>
              <label>C++</label>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img src={PythonIcon} height="60px" width="70rem"></img>
              <label>Python</label>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img src={JavaIcon} height="60px" width="70rem"></img>
              <label>Java</label>
            </div>
          </div>
          <hr></hr>
          <h5 style={{ textAlign: "center" }}>Databases</h5>
          <br></br>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img src={Mysqlicon} height="60px" width="70rem"></img>
              <label>MySQL</label>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img src={PostgresIcon} height="60px" width="70rem"></img>
              <label>PostgreSQL</label>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img src={MongoDBIcon} height="60px" width="70rem"></img>
              <label>MongoDB</label>
            </div>
          </div>
          <hr></hr>
        </div>
        <div>
          <h3>Experience</h3>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              padding: "1rem",
              margin: "1rem",
              "& > :not(style)": {
                m: 1,
                width: 300,
                height: 100,
              },
            }}
          >
          <Paper elevation={6}>
              <h5 className="experience">
                Summer Intern at HTSI, Pune where I worked with the backend team.
              </h5>
            </Paper>
            <Paper elevation={6}>
              <h5 className="experience">
                Technical Co-ordinator at Computer Society of India, CoEP
                Student Chapter
              </h5>
            </Paper>
            <Paper elevation={6}>
              <h5 className="experience">Member of Web Team, ASCI CoEP</h5>
            </Paper>
            <Paper elevation={6}>
              <h5 className="experience">Member of Astronomy Club,CoEP</h5>
            </Paper>
          </Box>
        </div>
      </div>
    </>
  );
}

export default MoreInfo;
