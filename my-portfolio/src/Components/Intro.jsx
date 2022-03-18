import { React } from "react";
import "./index.css"
import Footer from "./Footer";

function Intro() {
  return (
    <>
      <div className="intro">
        <h2 className="title">Hello there!</h2>
        <h2 className="title">I'm Anvita Mahajan</h2>
      </div>
      <br></br>
      <div className="skills">
        <h1>
        <span></span>
          <div class="message">
            <div class="word1">|web developer|</div>
            <div class="word2">|competitive coder|</div>
            <div class="word3">|curious learner|</div>
          </div>
        </h1>
      </div>
      <br/><br/><br/><br/><br/><br/>
      <Footer></Footer>
    </>
  );
}

export default Intro;
