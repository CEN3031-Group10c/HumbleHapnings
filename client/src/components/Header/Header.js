import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

//https://www.w3schools.com/css/css_navbar.asp
class Header extends React.Component {
    render(){

        const {selectedUpdate} = this.props;

        return (

        <nav className="z-depth-0">
            <div className="nav-wrapper white">
                <a href="#" class="logo"> <Link
                        to="/"
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
                        <a class="waves-effect waves-light btn" onClick={() => selectedUpdate(0)}>Home</a>
                    </li>
                    <li>
                        <a class="waves-effect waves-light btn" onClick={() => selectedUpdate(1)}>About</a>
                    </li>
                    <li>
                        <a class="waves-effect waves-light btn" onClick={() => selectedUpdate(2)}>Events</a>
                    </li>
                    <li>
                        <a class="waves-effect waves-light btn" onClick={() => selectedUpdate(3)}>Churches</a>
                    </li>
                    <li>
                        <a class="waves-effect waves-light btn"onClick={() => selectedUpdate(4)}><Link to="/ChurchCreation">Create Church Directory</Link></a>
                    </li>
                </ul>
            </div>
      </nav>
        )
    }
}

export default Header;
