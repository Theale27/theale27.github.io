import React, { Component } from "react";
import "../styles/skills.scss";

class Skills extends Component {
  render() {
    return (
      <main>
        <section className="titles">
          <h2>
            <span className="primary">My Skills</span>
          </h2>
        </section>
        <section id="skills">
          <div className="front-end">
            <h3>Front-end</h3>
            <hr />
            <ul>
              <li>HTML5 | CSS3</li>
              <li>LESS | SASS</li>
              <li>JavaScript (jQuery)</li>
              <li>Bootstrap 4</li>
              <li>React</li>
            </ul>
          </div>
          <div className="back-end">
            <h3>Back-end</h3>
            <hr />
            <ul>
              <li>SQL</li>
              <li>Node.js</li>
            </ul>
          </div>
          <div className="other">
            <h3>Other</h3>
            <hr />
            <ul>
              <li>Git, GitHub + Bitbucket, JIRA</li>
              <li>Responsive Design</li>
              <li>Photoshop, Illustrator</li>
              <li>Excel, Word</li>
            </ul>
          </div>
        </section>
      </main>
    );
  }
}

export default Skills;
