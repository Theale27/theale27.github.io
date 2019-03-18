import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navigation.scss";

class Navigation extends Component {
  render() {
    let linksMarkup = this.props.navLinks.map((link, i) => {
      return (
        <li key={i}>
          <NavLink exact to={link.link} activeClassName={"active"}>
            {link.label}
          </NavLink>
        </li>
      );
    });
    return (
      <nav>
        <ul className="horizontal-list">{linksMarkup}</ul>
      </nav>
    );
  }
}

export default Navigation;
