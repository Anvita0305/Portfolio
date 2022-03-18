import React from "react";
import ReactDOM from "react-dom";
import "./Components/index.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import App from "./Components/App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <>
  <BrowserRouter>
    <App></App>
    </BrowserRouter>
  </>,

  document.getElementById("root")
);
