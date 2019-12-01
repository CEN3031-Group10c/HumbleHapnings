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
            <ul>
                <Link to="/Home">
                    <div className="headerText">
                        <i className="material-icons">flare</i> 
                        HumbleHapnings
                    </div>
                </Link>
                <li><log onClick={() => this.props.logoutUser()}>Logout</log></li>
                <li><Link to="/ChurchDirectoryCreation" classname="a">Create a Church Directory</Link></li>
                <li><Link to="/ChurchDirectory" classname="a">Churches</Link></li>
                <li><Link to="/Events" classname="a">Events</Link></li>
                <li><Link to="/Home" classname="a">Social</Link></li>
            </ul>
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
