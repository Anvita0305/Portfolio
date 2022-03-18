import React from "react";
import "./index.css";
import ResponsiveAppBar from "./Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Intro from "./Intro";
import About from "./About";
import MoreInfo from "./AboutMeMore";
import Projects from "./Projects";
import Contact from "./Contact";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
      <ResponsiveAppBar></ResponsiveAppBar>
      <br></br>
      <Routes>
        <>
          <Route path="/" element={<Intro />}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/about/moreInfo" element={<MoreInfo/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </>
      </Routes>
    </>
  );
}

export default App;
