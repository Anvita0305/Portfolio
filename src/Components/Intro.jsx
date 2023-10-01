import { React } from "react";
import "./index.css"
import Footer from "./Footer";
import ReactTyped from "react-typed";

function Intro() {
  return (
    <>
      <div className="intro">
        <h2 className="title">Hello there!</h2>
        <h2 className="title">I'm Anvita Mahajan</h2>
      </div>
      <br></br>
      {/* <div className="skills">
        <h1>
        <span></span>
          <div class="message">
            <div class="word1">|web developer|</div>
            <div class="word2">|competitive coder|</div>
            <div class="word3">|curious learner|</div>
          </div>
        </h1>
      </div> */}
      <h1 style={{textAlign:"right"}}>
      <ReactTyped
          strings={["web developer","competitive coder","curious learner","ml enthusiast"]}
          typeSpeed={100}
          loop
          backSpeed={20}
          // cursorChar="|"
          // showCursor={true}
        />
        </h1>
      <br/><br/><br/><br/><br/><br/>
      <Footer></Footer>
    </>
  );
}

export default Intro;
