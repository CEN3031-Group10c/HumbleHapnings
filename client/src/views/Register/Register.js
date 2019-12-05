import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import NavBar from "../../components/layout/Navbar";
import "./Register.css";
import {NORMAL, UNAPPROVED_CHURCH_LEADER} from "../../actions/userTypes";

class Register extends Component {
    constructor(props) {
    super(props);
    this.state = {
        name: "",
        email: "",
        password: "",
        password2: "",
        userType: NORMAL,
        errors: {}
    };
  }

    componentDidMount() {
        // If logged in and user navigates to Register page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
        this.props.history.push("/Home");
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    //Josh - changes the account type based on checkbox status
    onCheckbox() {
        if (this.state.userType === NORMAL)
        {
            this.setState({ userType: UNAPPROVED_CHURCH_LEADER });
        }
        else 
        {
            this.setState({ userType: NORMAL });
        }
    }
    
    //Josh - Changes the state of the value at component target id  
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    //Submits the register request and saves it to the db
    onSubmit = e => {
        e.preventDefault();
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2,
            userType: this.state.userType
        };
        this.props.registerUser(newUser, this.props.history); 
    };
    
    render() {
        const { errors } = this.state;
    return (
        <div>
            <NavBar />
            <div className="book1-background">
                <div className="container">
                    <div className="row">
                        <div className="col s8 offset-s2 colorDiv2">
                            <Link to="/landing" className="btn-flat waves-effect">
                                <i className="material-icons left">keyboard_backspace</i>
                                Back to home
                        </Link>
                            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                                <h4>
                                    <b>Register</b> below
                        </h4>
                                <p className="grey-text text-darken-1">
                                    Already have an account? <Link to="/login">Log in</Link>
                                </p>
                            </div>
                            <form noValidate onSubmit={this.onSubmit}>
                                <div className="input-field col s12">
                                    <input
                                        onChange={this.onChange}
                                        value={this.state.name}
                                        error={errors.name}
                                        id="name"
                                        type="text"
                                        className={classnames("", {
                                            invalid: errors.name
                                        })}
                                    />
                                    <label htmlFor="name">Name</label>
                                    <span className="red-text">{errors.name}</span>
                                </div>
                                <div className="input-field col s12">
                                    <input
                                        onChange={this.onChange}
                                        value={this.state.email}
                                        error={errors.email}
                                        id="email"
                                        type="email"
                                        className={classnames("", {
                                            invalid: errors.email
                                        })}
                                    />
                                    <label htmlFor="email">Email</label>
                                    <span className="red-text">{errors.email}</span>
                                </div>
                                <div>
                                <p>
                                <label style={{paddingLeft: 25}}>
                                    <input onChange={this.onCheckbox.bind(this)} type="checkbox" class="filled-in" />
                                    <span className="black-text">Apply for a Church Leader account?</span>
                                </label>
                                </p>
                                </div>
                                <div className="input-field col s12">
                                    <input
                                        onChange={this.onChange}
                                        value={this.state.password}
                                        error={errors.password}
                                        id="password"
                                        type="password"
                                        className={classnames("", {
                                            invalid: errors.password
                                        })}
                                    />
                                    <label htmlFor="password">Password</label>
                                    <span className="red-text">{errors.password}</span>
                                </div>
                                <div className="input-field col s12">
                                    <input
                                        onChange={this.onChange}
                                        value={this.state.password2}
                                        error={errors.password2}
                                        id="password2"
                                        type="password"
                                        className={classnames("", {
                                            invalid: errors.password2
                                        })}
                                    />
                                    <label htmlFor="password2">Confirm Password</label>
                                    <span className="red-text">{errors.password2}</span>
                                </div>
                                <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                                    <button
                                        style={{
                                            width: "150px",
                                            borderRadius: "3px",
                                            letterSpacing: "1.5px",
                                            marginTop: "1rem"
                                        }}
                                        type="submit"
                                        className="btn btn-large waves-effect waves-light hoverable "
                                    >
                                        Sign up
                            </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

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
