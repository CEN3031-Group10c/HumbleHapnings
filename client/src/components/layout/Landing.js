//Josh - https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-2-frontend-6eac4e38ee82
import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/layout/Navbar";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Landing extends Component {

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
        this.props.history.push("/home");
    }
}

componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
        this.props.history.push("/home"); // push user to dashboard when they login
    }

    if (nextProps.errors) {
        this.setState({
            errors: nextProps.errors
        });
    }
}

  render() {
    return (
      <div>
        <NavBar/>
        <div style={{ height: "75vh" }} className="container valign-wrapper">
          <div className="row">
            <div className="col s12 center-align">
              <h4>
                <b>Build</b> a login/auth app with the{" "}
                <span style={{ fontFamily: "Verdana" }}>MERN</span> stack from
                scratch
              </h4>
              <p className="flow-text grey-text text-darken-1">
                Create a (minimal) full-stack app with user authentication via
                passport and JWTs
              </p>
              <br />
              <div className="col s6">
                  <Link 
                    className="btn btn-large waves-effect waves-light hoverable" 
                    to="/Register" 
                    style={{color: "white"}} >
                    Register
                  </Link>
              </div>
              <div className="col s6">
                <Link 
                    className="btn btn-large waves-effect waves-light hoverable" 
                    to="/Login" 
                    style={{color: "white"}} >
                    Login
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
mapStateToProps,
{ }
)(Landing);
