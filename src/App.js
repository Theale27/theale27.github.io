import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import AboutMe from "./components/about-me";
import Skills from "./components/skills.js";
import Projects from "./components/projects";

class App extends Component {
  render() {
    let navLinks = [
      {
        label: "About Me",
        link: "/"
      },
      {
        label: "Skills",
        link: "/skills"
      },
      {
        label: "Projects",
        link: "/projects"
      }
    ];

    return (
      <Router>
        <div className="App">
          <Navigation navLinks={navLinks} />
          <Switch>
            <Route path={navLinks[1].link} component={Skills} />
            <Route path={navLinks[2].link} component={Projects} />
            {/* Switch finds the first match which is why home ('/') is last */}
            <Route path={navLinks[0].link} component={AboutMe} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
