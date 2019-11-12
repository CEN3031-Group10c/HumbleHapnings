//Josh - https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-2-frontend-6eac4e38ee82
import React, { Component } from "react";
import { Link } from "react-router-dom";

//TODO - Josh - Adjust this for HumbleHapnings and discuss whether we want this change.
class Navbar extends Component {
  render() {
    return (

        <nav className="z-depth-0">
        <div className="nav-wrapper white">
          <Link
              to="/"
              style={{
                fontFamily: "monospace"
              }}
              className="col s5 brand-logo left black-text"
            >
              <i className="material-icons">flare</i>
              HumbleHapnings
            </Link>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">JavaScript</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Navbar;