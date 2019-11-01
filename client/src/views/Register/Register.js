import React from 'react';
import './Register.css';

class Register extends React.Component{
    render(){
        return(
            <body className="reg">
                <div class="container">
                    <h1>Create Account</h1>
                    <div class="row-container">
                        <div class="column2">
                            <form>
                                <p>Please fill in this form to create an account.</p>
                                <div class="regName">
                                    <label for="regName"><b>Name</b></label>
                                    <input 
                                        className="reg"
                                        id="regName" 
                                        type="text" 
                                        placeholder="Enter Name" 
                                        required
                                    />

                                    <label for="regGender"><b>Gender</b></label>
                                    <input 
                                        className="reg"
                                        id="regGender" 
                                        type="text" 
                                        placeholder="Enter Gender" 
                                        required
                                    />
                                    
                                    <label for="regEmail"><b>Email</b></label>
                                    <input 
                                        className="reg"
                                        id="regEmail" 
                                        type="text" 
                                        placeholder="Enter Email" 
                                        required
                                    />

                                    <label for="regPassword"><b>Password</b></label>
                                    <input 
                                        className="reg"
                                        id="regPassword" 
                                        type="password" 
                                        placeholder="Enter Password" 
                                        required
                                    />

                                    <label for="regConfirmPass"><b>Confirm Password</b></label>
                                    <input 
                                        className="reg" 
                                        id="regConfirmPass" 
                                        type="password" 
                                        placeholder="Retype Password" 
                                        required
                                    />
                                </div>

                                <button type="submit" class="reg">Create Account</button>
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
