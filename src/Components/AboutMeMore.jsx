import React from "react";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

function MoreInfo() {
  return (
    <>
      <div className="aboutMeCards">
        <div className="col-4">
          <h3>Education</h3>
          <ul>
            <li>B.Tech : College of Engineering, Pune ,2024</li>
            <li>HSC : Sir Parshurambhau College, 2020 (95.33% PCM)</li>
            <li>SSC : S.P.M English School, 2018 (98%)</li>
          </ul>
        </div>

        <h3>Skills</h3>
        <div className="slider">
          <div className="col-6">
            <h4>HTML</h4>
            <Slider
              defaultValue={80}
              color="secondary"
              aria-label="Always visible"
              valueLabelDisplay="on"
            />
            <h4>CSS</h4>
            <Slider
              defaultValue={80}
              color="success"
              aria-label="Always visible"
              valueLabelDisplay="on"
            />
            <h4>Javascript</h4>
            <Slider
              defaultValue={60}
              color="primary"
              aria-label="Always visible"
              valueLabelDisplay="on"
            />
          </div>
          <div className="col-6">
            <h4>React Js</h4>
            <Slider
              defaultValue={60}
              color="warning"
              aria-label="Always visible"
              valueLabelDisplay="on"
            />
            <h4>Python</h4>
            <Slider
              defaultValue={80}
              color="primary"
              aria-label="Always visible"
              valueLabelDisplay="on"
            />
            <h4>C</h4>
            <Slider
              defaultValue={60}
              color="secondary"
              aria-label="Always visible"
              valueLabelDisplay="on"
            />
          </div>
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
            <Paper elevation={6}>
              <h5 className="experience">
                Participated in a Hackathon organized by IIIT, Pune
              </h5>
            </Paper>
          </Box>
        </div>
      </div>
    </>
  );
}

export default MoreInfo;
