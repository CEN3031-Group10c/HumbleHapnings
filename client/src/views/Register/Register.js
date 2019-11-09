import React from 'react';
import './Register.css';

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
    };

    /* Megan End Code */

    render(){
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
                                        className="reg"
                                        ref={ (value) => {this.nameValue = value} }
                                        id="regName" 
                                        type="text" 
                                        placeholder="Enter Name" 
                                        required
                                    />

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
                                        className="reg"
                                        ref={ (value) => {this.emailValue = value} }
                                        id="regEmail" 
                                        type="text" 
                                        placeholder="Enter Email" 
                                        required
                                    />

                                    <label for="regPassword"><b>Password</b></label>
                                    <input 
                                        className="reg"
                                        ref={ (value) => {this.passwordValue = value} }
                                        id="regPassword" 
                                        type="password" 
                                        placeholder="Enter Password" 
                                        required
                                    />

                                    <label for="regConfirmPass"><b>Confirm Password</b></label>
                                    <input 
                                        className="reg" 
                                        ref={ (value) => {this.password2Value = value} }
                                        id="regConfirmPass" 
                                        type="password" 
                                        placeholder="Retype Password" 
                                        required
                                    />
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

export default Register;
