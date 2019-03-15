import React, { Component } from "react";
import "../styles/header.scss";

class Header extends Component {
  render() {
    return (
      <nav>
        <ul className="horizontal-list">
          <li className="home">
            <a
              className={window.location.pathname === "/" ? "active" : ""}
              href="./"
              title="Home"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className={
                window.location.pathname === "/myskills.html" ? "active" : ""
              }
              href="myskills.html"
              title="My Skills"
            >
              My Skills
            </a>
          </li>
          <li>
            <a
              className={
                window.location.pathname === "/projects.html" ? "active" : ""
              }
              href="projects.html"
              title="Projects"
            >
              Projects
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
