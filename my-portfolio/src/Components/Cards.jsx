import React from "react";
import "./index.css";
import Button from "@mui/material/Button";

function Cards(props) {
  return (
    <>
      <div className="allCards">
        <div className="mainCard" data-aos="flip-up">
          <div className="col-6">
            <img src={props.imgsrc} className="projImg" alt="projects image" />
          </div>
          <div className="col-6">
            <div>
              <h2>{props.title}</h2>
              <br></br>
              <h3>About:</h3>
              <p>{props.about}</p>
              <br></br>
              <h5>
                <Button href={props.link} variant="outlined">
                  GitHub Link
                </Button>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
