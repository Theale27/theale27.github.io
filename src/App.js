import React, { Component } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import AboutMe from "./components/about-me";
import Skills from "./components/skills.js";
import Projects from "./components/projects";

class App extends Component {
  render() {
    let links = [
      {
        component: <AboutMe />,
        label: "About Me",
        link: "about-me",
        active: false
      },
      {
        component: <Skills />,
        label: "Skills",
        link: "skills",
        active: false
      },
      {
        component: <Projects />,
        label: "Projects",
        link: "projects",
        active: false
      }
    ];

    function loadMainSection() {
      let i = null;
      links.forEach((element, index) => {
        if (window.location.pathname === "/" + element.link) {
          i = index;
        } else if (window.location.pathname === "/") {
          i = 0;
        }
      });
      return links[i].component;
    }

    return (
      <div className="App">
        <Header links={links} />
        {loadMainSection()}
        <Footer />
      </div>
    );
  }
}

export default App;
