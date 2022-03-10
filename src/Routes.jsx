import React from "react";
import {Route, Switch} from "react-router-dom";
import Cards from "./Cards";
import Intro from "./Intro";
import About from "./About";

function Routes() {
  return(
  <>
      <Route exact path="/about" component={About} />
      <Route exact path="/projects" component={Cards} />
  </>)
}

export default Routes;