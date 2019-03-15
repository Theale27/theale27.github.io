import React, { Component } from "react";
import "../styles/about-me.scss";

class AboutMe extends Component {
  render() {
    return (
      <main>
        <section className="titles">
          <h1>
            <span className="secondary">Theale </span>
            <span className="primary">Hastelow</span>
          </h1>
          <h2 className="primary">Web Developer</h2>
        </section>

        <section id="aboutme">
          <p>
            I'm an aspiring web developer with a bachelors degree in Information
            and Communications Technology from the University of the Sunshine
            Coast.
          </p>
          <p>
            I have experience with creating numerous responsive themes that used
            the bootstrap framework for the CareerHub web application which is
            used by universities across Australia, New Zealand, and the UK.
            <br />
            As part of a 3 person team at USC, I also helped create the Chinese
            Museum of Queensland website{" "}
            <a href="http://cmoq.com.au/">cmoq.com.au</a> for an industry
            project.
          </p>
          <p>
            I'm looking to take my education, experience, and enthusiasm for web
            development onto greater web development challenges to grow my
            skills.
          </p>
        </section>
      </main>
    );
  }
}

export default AboutMe;
