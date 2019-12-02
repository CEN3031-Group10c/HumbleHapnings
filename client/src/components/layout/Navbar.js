//Josh - https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-2-frontend-6eac4e38ee82
import React, { Component } from "react";
import { Link } from "react-router-dom";

//TODO - Josh - Adjust this for HumbleHapnings and discuss whether we want this change.
class Navbar extends Component {
  render() {
    return (
      <ul>
                <Link to="/landing">
                    <div className="headerText">
                        <i className="material-icons">flare</i> 
                        HumbleHapnings
                    </div>
                </Link>
      </ul>
    );
  }
}
export default Navbar;