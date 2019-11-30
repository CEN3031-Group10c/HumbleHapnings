//Josh - https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-2-frontend-6eac4e38ee82
import React, { Component } from "react";
import { Link } from "react-router-dom";

//TODO - Josh - Adjust this for HumbleHapnings and discuss whether we want this change.
class Navbar extends Component {
  render() {
    return (
      <nav className="z-depth-0">
        <div className="nav-wrapper white">
          <a className="logo" href="/landing"> 
            <Link
                to="/landing"
                style={{
                  fontFamily: "Verdana"
                }}
                className="col s5 brand-logo left black-text"
            >
              <i className="material-icons">flare</i>
              HumbleHapnings
            </Link>
          </a>
        </div>
      </nav>
    );
  }
}
export default Navbar;