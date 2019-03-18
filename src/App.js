import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
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

    const NoMatch = ({ location }) => {
      return (
        <div>
          <h3>
            No match for <code>{location.pathname}</code>
          </h3>
        </div>
      );
    };

    return (
      <Router>
        <div className="App">
          <Navigation navLinks={navLinks} />
          <Switch>
            <Route exact path={navLinks[0].link} component={AboutMe} />
            <Route path={navLinks[1].link} component={Skills} />
            <Route path={navLinks[2].link} component={Projects} />

            <Redirect exact from="/" to="/" />
            <Redirect from="/skills" to="/skills" />
            <Redirect from="projects" to="projects" />

            <Route component={NoMatch} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
