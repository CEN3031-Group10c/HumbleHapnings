import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import {Link} from 'react-router-dom';
import NavBar from "../../components/layout/Navbar";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

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
      const { user } = this.props.auth;

      return (
        <div className='field1-background'>
          <NavBar/>
          <div style={{ height: "75vh" }} className="container valign-wrapper">
            <div className="row">
              <div className="col s12 center-align">
                <h4>
                  <b>What's Hapning?</b>
                  <p className="flow-text grey-text text-darken-1">
                    <span style={{ fontFamily: "Verdana" }}>HumbleHapnings</span> 👏
                  </p>
                </h4>
                <Link 
                  className="btn btn-large waves-effect waves-light hoverable" 
                  to="/Login" 
                  style={{color: "white"}} >
                  Login
                </Link>
                <Link 
                  className="btn btn-large waves-effect waves-light hoverable" 
                  to="/Register" 
                  style={{color: "white"}} >
                  Register
                </Link>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
