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

        const {selectedUpdate} = this.props;

        return (

        <nav className="z-depth-0">
            <div className="nav-wrapper white">
                <a href="#" class="logo"> <Link
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
                <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li>
                        <a class="waves-effect waves-light btn blue accent-3">Social</a>
                    </li>
                    <li>
                        <a class="waves-effect waves-light btn blue accent-3" onClick={() => selectedUpdate(2)}>Events</a>
                    </li>
                    <li>
                        <a class="waves-effect waves-light btn blue accent-3" onClick={() => selectedUpdate(3)}>Churches</a>
                    </li>
                    <li>
                        <a class="waves-effect waves-light btn blue accent-3"onClick={() => selectedUpdate(4)}><Link to="/ChurchCreation">Create Church Directory</Link></a>
                    </li>
                    <li>
                    <a class="waves-effect waves-light btn blue accent-3"onClick={this.onLogoutClick}>Logout</a>
                    </li>
                </ul>
            </div>
      </nav>
        )
    } //<Link to="/Login">
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
