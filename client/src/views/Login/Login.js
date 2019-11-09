import React from 'react';
import './Login.css';
import {Link} from 'react-router-dom';


//From: Kevin
/*
this function randomly picks a background 
and returns the classname of the background image in css
*/
function randomImage(){
    var backgroundImages = ['book1-background', 'field1-background', 'christians1'];
    var randomIndex = Math.floor(Math.random() * backgroundImages.length);
    var randomImg = backgroundImages[randomIndex];
    return randomImg;
}    
//To: Kevin

class Login extends React.Component {

    /* Megan Start Code */
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            errors: {}
        };
    }

    // Update state of values
    valuesUpdate() {
        this.setState({
            email: this.userEmail.value,
            password: this.userPassword.value
        })
    }

    onSubmit = e => {
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
    };

    /* Megan End Code */

    render() {
        return (
            /* 
                Changed Log In
                Now it requires user to input email instead of username
                - Megan 
            */
            //From: Kevin
            <body className='login'>
                {/*background image*/}
                <div className={randomImage()}> 
                    <h1 align="center">Welcome to HumbleHapnings</h1>
                    <form noValidate onSubmit={this.onSubmit}>
                        <div className="login-container">
                            <div className="input-container">
                                <label for='loginEmail'><b>Email</b></label>
                                <input 
                                    id = 'loginEmail'
                                    type="text" 
                                    placeholder="Email"  
                                    ref={(value) => {this.userEmail = value}}
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
                                    <button type="submit" onClick={this.valuesUpdate.bind(this)}>Login</button>
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
