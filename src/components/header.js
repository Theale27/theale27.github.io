import React, { Component } from "react";
import "../styles/header.scss";

class Header extends Component {
  render() {
    let linksMarkup = this.props.links.map((link, i) => {
      // Set the link to active for its page
      if (window.location.pathname === "/" + link.link) {
        link.active = true;
      } else if (window.location.pathname === "/") {
        this.props.links[0].active = true;
      }
      return (
        <li key={i}>
          <a active={link.active.toString()} href={link.link}>
            {link.label}
          </a>
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

export default Header;
