import React, { Component } from "react";
import "../styles/skills.scss";

class Skills extends Component {
  render() {
    return (
      <main>
        <section class="titles">
          <h2>
            <span class="primary">My Skills</span>
          </h2>
        </section>
        <section id="skills">
          <div class="front-end">
            <h3>Front-end</h3>
            <hr />
            <ul>
              <li>HTML5 | CSS3</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>LESS | SASS</li>
              <li>Bootstrap 4</li>
            </ul>
          </div>
          <div class="back-end">
            <h3>Back-end</h3>
            <hr />
            <ul>
              <li>PL/SQL | T-SQL</li>
              <li>Node.js</li>
            </ul>
          </div>
          <div class="other">
            <h3>Other</h3>
            <hr />
            <ul>
              <li>Git</li>
              <li>Responsive Design</li>
              <li>Photoshop</li>
              <li>Illustrator</li>
            </ul>
          </div>
        </section>
      </main>
    );
  }
}

export default Skills;
