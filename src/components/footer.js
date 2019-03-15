import React, { Component } from "react";
import "../styles/footer.scss";

class Footer extends Component {
  render() {
    return (
      <footer>
        <ul className="horizontal-list">
          <li>
            <a href="https://www.linkedin.com/in/thealehastelow/">LinkedIn</a>
          </li>
          <li>
            <a href="https://github.com/theale27/">GitHub</a>
          </li>
        </ul>
      </footer>
    );
  }
}

export default Footer;
