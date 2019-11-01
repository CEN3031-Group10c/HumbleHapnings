import React from 'react';
import './Login.css';
import {Link} from 'react-router-dom';

class Login extends React.Component {
    render() {
        return (
            //From: Kevin
            <body>
                {/*background image*/}
                <div className="christians"> 
                    <h1 align="center">Welcome to HumbleHapnings</h1>
                    <form>
                        <div className="login-container">

                            <div className="input-container">
                                <label for='loginUserName'><b>Username</b></label>
                                <input 
                                    id = 'loginUserName'
                                    type="text" 
                                    placeholder="Username"  
                                    ref={(value) => {this.userName = value}}
                                    required
                                />

                                <label for="loginPassword"><b>Password</b></label>
                                <input 
                                    id="loginPassword"
                                    type="password" 
                                    placeholder="Password" 
                                    ref={(value) => {this.userPassword = value}}
                                    required
                                />

                                <div className="row-container">
                                    <button type="submit">Login</button>
                                    <Link to="/Register"><button>Sign Up</button></Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </body>
            //To: Kevin
        );
    }
}

export default Login;
