import React from 'react';
import './Register.css';
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";

class Register extends React.Component{

    /* Megan Start Code */
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            gender: "",
            email: "",
            password: "",
            password2: ""
        };
    }

    //Josh
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
          this.setState({
            errors: nextProps.errors
          });
        }
    }

    //Josh - Changes the state of the value at component target id
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
      };
   

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }
      //this.props.registerUser(newUser, this.props.history); 
 // };

    // Update all values to inputted values
    valuesUpdate() {
        this.setState({
            name: this.nameValue.value,
            gender: this.genderValue.value,
            email: this.emailValue.value,
            password: this.passwordValue.value,
            password2: this.password2Value.value
        })
    }

    onSubmit = e => {
        e.preventDefault();
        const newUser = {
            name: this.state.name,
            gender: this.state.gender,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        }

        this.props.registerUser(newUser, this.props.history); 
    };

    /* Megan End Code */

    render(){
        const { errors } = this.state;

        return(
            <body className="reg">
                <div class="container">
                    <h1>Create Account</h1>
                    <div class="row-container">
                        <div class="column2">
                            <form noValidate onSubmit={this.onSubmit}>
                                <p>Please fill in this form to create an account.</p>
                                <div class="regName">
                                    <label for="regName"><b>Name</b></label>
                                    <input 
                                        className={ classnames("reg", {
                                            invalid: errors.name
                                        })}
                                        ref={ (value) => {this.nameValue = value} }
                                        id="regName" 
                                        type="text" 
                                        placeholder="Enter Name" 
                                        required
                                    />
                                    <span className="red-text">{errors.name}</span>

                                    <label for="regGender"><b>Gender</b></label>
                                    <input 
                                        className="reg"
                                        ref={ (value) => {this.genderValue = value} }
                                        id="regGender" 
                                        type="text" 
                                        placeholder="Enter Gender" 
                                        required
                                    />
                                    
                                    <label for="regEmail"><b>Email</b></label>
                                    <input 
                                        className={classnames("reg", {
                                            invalid: errors.email
                                          })}
                                        ref={ (value) => {this.emailValue = value} }
                                        id="regEmail" 
                                        type="text" 
                                        placeholder="Enter Email" 
                                        required
                                    />
                                    <span className="red-text">{errors.password}</span>

                                    <label for="regPassword"><b>Password</b></label>
                                    <input 
                                        className={classnames("reg", {
                                            invalid: errors.password
                                          })}
                                        ref={ (value) => {this.passwordValue = value} }
                                        id="regPassword" 
                                        type="password" 
                                        placeholder="Enter Password" 
                                        required
                                    />
                                    <span className="red-text">{errors.password}</span>

                                    <label for="regConfirmPass"><b>Confirm Password</b></label>
                                    <input 
                                        className={classnames("reg", {
                                            invalid: errors.password2
                                          })}
                                        ref={ (value) => {this.password2Value = value} }
                                        id="regConfirmPass" 
                                        type="password" 
                                        placeholder="Retype Password" 
                                        required
                                    />
                                    <span className="red-text">{errors.password2}</span>
                                </div>

                                <button type="submit" onClick={this.valuesUpdate.bind(this)} class="reg">Create Account</button>
                            </form>
                        </div>



                        <div class="column1">
                            Payment
                        </div>
                    </div>
                </div>
            </body>
        )
    }
}

/// Josh's code below
//
Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };

// This allows us to call this.props.auth or this.props.errors within our Register component.
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });

/*
  You may also notice we wrapped our Register with a withRouter(). 
  While it is easy to redirect within a component (can simply say this.props.history.push('/dashboard') for example), 
  we can’t do that by default within an action. To allow us to redirect within an action, we ...
    - Used withRouter from react-router-dom, wrapping our component in our export withRouter()
    - Will add a parameter to this.props.history within our call to this.props.registerUser(newUser, this.props.history) 
      in our onSubmit event so we can easily access it within our action
*/
export default connect(
    mapStateToProps,
    { registerUser }
  )(withRouter(Register));
