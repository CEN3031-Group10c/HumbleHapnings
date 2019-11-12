import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

//https://www.w3schools.com/css/css_navbar.asp
class Header extends React.Component {
    render(){

        const {selectedUpdate} = this.props;

        return (
            <div>
                <body className='header'>
                    <div className='navbar'>
                    <li className='logo'>HumbleHapnings</li>
                    <ul class="nav">
                        <button onClick={() => selectedUpdate(0)}>Home</button>
                        <button onClick={() => selectedUpdate(1)}>About</button>
                        <button onClick={() => selectedUpdate(2)}>Events</button>
                        <button onClick={() => selectedUpdate(3)}>Church Directory</button>
                        <Link to="/ChurchCreation">
                            <button onClick={() => selectedUpdate(4)}>Create Church Directory</button>
                        </Link>
                    </ul>
                    </div>
                </body>
            </div>
        )
    }
}

export default Header;
