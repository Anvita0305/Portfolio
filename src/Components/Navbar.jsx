import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom";

function ResponsiveAppBar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <h1>My Portfolio</h1>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link to="/" class="nav-link active" aria-current="page">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/about" class="nav-link">
                    About
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/projects" class="nav-link">
                    Projects
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/contact" class="nav-link">
                    Contact Me
                  </Link>
                </li>
              </ul>
            </div>
        </div>
      </nav>
    </>
  );
}
export default ResponsiveAppBar;
