//Josh - https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-2-frontend-6eac4e38ee82
import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/layout/Navbar";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import './Landing.css';

class Landing extends Component {

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
        this.props.history.push("/home");
    }
}

componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
        this.props.history.push("/Home"); // push user to dashboard when they login
    }

    if (nextProps.errors) {
        this.setState({
            errors: nextProps.errors
        });
    }
}

  render() {
    return (
      <div className='field1-background'>
        <NavBar/>
        <div style={{ height: "50vh", paddingBottom: "200"}} className="container valign-wrapper">
          <div className="row ">
            <div style={{ paddingBottom: "25px" }} className="col s12 center-align colorDiv">
              <h2>
                <b>Welcome to HumbleHapnings!</b> 
              </h2>
              <h5>
                This is a community for believers in God. 
              </h5>
              <h6>
              Register or login below to make friends and find local churches and events. 
              </h6>
              <br />
              <div className="col s6">
                  <Link 
                    className="btn btn-large waves-effect waves-light hoverable blue accent-3" 
                    to="/Register" 
                    style={{color: "white"}} >
                    Register
                  </Link>
              </div>
              <div className="col s6">
                <Link 
                    className="btn btn-large waves-effect waves-light hoverable blue accent-3" 
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
