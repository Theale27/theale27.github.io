import React, { Component } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import AboutMe from "./components/about-me";
import Skills from "./components/skills.js";
import Projects from "./components/projects";

class App extends Component {
  render() {
    let mainComponent = null;
    if (window.location.pathname === "/") {
      mainComponent = <AboutMe />;
    } else if (window.location.pathname === "/myskills.html") {
      mainComponent = <Skills />;
    } else if (window.location.pathname === "/projects.html") {
      mainComponent = <Projects />;
    }
    return (
      <div className="App">
        <Header />
        {mainComponent}
        <Footer />
      </div>
    );
  }
}

export default App;
