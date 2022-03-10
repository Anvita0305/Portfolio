import React from "react";
import Cards from "./Cards";
import Data from "./Data";
import Footer from "./Footer";

function projectCards(val) {
  return (
    <>
      <Cards title={val.title} about={val.about} link={val.gitLink} />
    </>
  );
}

function Projects() {
  return (
    <>
      <h2 className="cardHeading">Web-Development Projects:-</h2>
      <hr></hr>
      <div className="allCards">{Data.map(projectCards)}</div>
      <br />
      <Footer></Footer>
    </>
  );
}

export default Projects;
