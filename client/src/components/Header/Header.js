import React from 'react';
import './Header.css';

//https://www.w3schools.com/css/css_navbar.asp
class Header extends React.Component {
    render(){
        return (
            <div>
                <body className='header'>
                    <div className='navbar'>
                    <li className='logo'>HumbleHapnings</li>
                    <ul class="nav">
                        <button>Home</button>
                        <button>About</button>
                        <button>Events</button>
                        <button>Church Directory</button>
                    </ul>
                    </div>
                </body>
            </div>
        )
    }
}

export default Header;
