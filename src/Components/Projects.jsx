import {React, useState} from "react";
import Footer from "./Footer";
import "./index.css";
import { Link } from "react-router-dom";
import Cards from "./Cards";
import Data from "./Data";

function projectCards(val) {
  return (
    <>
      <Cards
        imgsrc={val.imgsrc}
        title={val.title}
        about={val.about}
        link={val.gitLink}
      />
    </>
  );
}

function Projects() {
  const [showText, setShowText] = useState(false);
  const display = () => setShowText(true);
  return (
    <>
      <div className="outer">
        {/* <Link to="/projects/web-dev"> */}
          <div className="button_slide slide_diagonal" onClick={display}>
            WEB DEVELOPMENT PROJECTS
          </div>
        {/* </Link> */}
      </div>
      <br />
      {showText ?
        <div>
        <h2 className="cardHeading">Web-Development Projects:-</h2>
        <hr></hr>
        <div className="allCards">{Data.map(projectCards)}</div>
        <br />
      </div>
      :null
      }
      {showText ?
        <Footer/>
      :null
      }
      
    </>
  );
}

export default Projects;
