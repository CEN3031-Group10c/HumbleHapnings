import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

//https://www.w3schools.com/css/css_navbar.asp
class Header extends React.Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
      };

    render(){

        return (

        <nav className="z-depth-0">
            <div className="nav-wrapper white">
                <a className="logo" href="/home"> <Link
                        to="/Home"
                        style={{
                            fontFamily: "Verdana"
                        }}
                        className="col s5 brand-logo left black-text"
                    >
                            <i className="material-icons">flare</i>
                            HumbleHapnings
                        </Link>
                </a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <a className="waves-effect waves-light btn blue accent-3" href="/home">Social</a>
                    </li>
                    <li>
                        <a className="waves-effect waves-light btn blue accent-3" href="/Events"> <Link to="/Events">Events</Link></a>
                    </li>
                    <li>
                        <a className="waves-effect waves-light btn blue accent-3" href="/ChurchDirectory"> <Link to="/ChurchDirectory">Churches</Link></a>
                    </li>
                    <li>
                        <a className="waves-effect waves-light btn blue accent-3" href="/ChurchCreation"> <Link to="/ChurchCreation">Create Church Directory</Link></a>
                    </li>
                    <li>
                        <a className="waves-effect waves-light btn blue accent-3" onClick={this.onLogoutClick} href="login">Logout</a>
                    </li>
                </ul>
            </div>
      </nav>
        )
    } 
}

Header.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};
  
const mapStateToProps = state => ({
    auth: state.auth
});
  
export default connect(
    mapStateToProps,
    { logoutUser }
    )(Header);
