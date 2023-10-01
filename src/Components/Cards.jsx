import React from "react";
import "./index.css";
import Button from "@mui/material/Button";

function Cards(props) {
  return (
    <>
      <div className="allCards">
        <div className="mainCard" data-aos="flip-up">

          <div className="col-12">
            <div>
              <h3 style={{textAlign:"center",padding:"1rem"}}>{props.title}</h3>
              <hr></hr>
              <br></br>
              <h5>About:</h5>
              <p>{props.about}</p>
              {/* <br></br> */}
              <hr></hr>
              <br></br>
              <h5 style={{textAlign:"center"}}>
                <Button href={props.link} variant="outlined">
                  GitHub/ Gitlab Link
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
