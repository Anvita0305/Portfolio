import React from "react";
import Cards from "./Cards";
import Data from "./Data";
import "./index.css";

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

function WebDev() {
  return (
    <>
      <div>
        <h2 className="cardHeading">Web-Development Projects:-</h2>
        <hr></hr>
        <div className="allCards">{Data.map(projectCards)}</div>
        <br />
      </div>
    </>
  );
}
export default WebDev;