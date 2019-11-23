import React from 'react';
import './ChurchDirectoryCreation.css';
import axios from "axios";
import { ADMIN } from "../../actions/userTypes";
import { connect } from "react-redux";
import PropTypes from "prop-types";

//From: Lukas
/* 
This class is the form for church creation
*/
class ChurchDirectoryCreation extends React.Component{

    constructor (props){
        super(props);
        this.state = {
            name: "",
            pastor: "",
            address: "",
            email: "",
            phone: "",
            description: ""
        };
    }

    componentDidMount() {
        // If the user is not an admin, push them back to the home page.
        if (this.props.auth.user.userType !== ADMIN) {
            this.props.history.push("/home");
        }
    }
    
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
          this.setState({
            errors: nextProps.errors
          });
        }
    }
    
    //Updates the value of the specific id that is changed when inputting information into text box
    onChange = event => {
        this.setState({ [event.target.id]: event.target.value});
    }

    // Creates a new church listing when the submit button is pressed
    onSubmit = event => {
        event.preventDefault();

        const newChurchListing = {
            name: this.state.name,
            pastor: this.state.pastor,
            address: this.state.address,
            email: this.state.email,
            phone: this.state.phone,
            description: this.state.description
        }

        console.log(newChurchListing);

        // Sends the user data to the database and then redirects to the homepage using axios
        axios
        .post("api/ChurchCreation/create", newChurchListing)
        .then(function(res) {
            window.location = "/home"
        })
        
    };
    // Needs new css to cleanup
    render(){
        return(
            <body className="reg">
                <div class="container">
                    <h1>Create Church Listing</h1>
                    <div class="row-container">
                        <div class="column2">
                            <form onSubmit = {this.onSubmit}>
                                <p>Please fill in this form to create a church listing.</p>
                                <div class="regName">
                                    <label for="regName"><b>Name</b></label>
                                    <input 
                                        id="name" 
                                        type="text" 
                                        placeholder="Enter Name of Church" 
                                        value= {this.state.name}
                                        onChange={this.onChange}
                                        required
                                    />

                                    <label for="regPastor"><b>Pastor</b></label>
                                    <input 
                                        id="pastor" 
                                        type="text" 
                                        placeholder="Enter Pastor Name" 
                                        value= {this.state.pastor}
                                        onChange={this.onChange}
                                        required
                                    />
                                    
                                    <label for="regEmail"><b>Email</b></label>
                                    <input 
                                        id="email" 
                                        type="text" 
                                        placeholder="Enter Church Email" 
                                        value= {this.state.email}
                                        onChange={this.onChange}
                                        required
                                    />

                                    <label for="regAddress"><b>Address</b></label>
                                    <input 
                                        id="address" 
                                        type="text" 
                                        placeholder="Enter Church Address"
                                        value= {this.state.address} 
                                        onChange={this.onChange}
                                        required
                                    />  

                                    <label for="regPhone"><b>Phone Number</b></label>
                                    <input 
                                        id="phone" 
                                        type="text" 
                                        placeholder="Enter Church Phone Number" 
                                        value= {this.state.phone}
                                        onChange={this.onChange}
                                        required
                                    />

                                    <label for="regDescription"><b>Description</b></label>
                                    <input 
                                        id="description" 
                                        type="text" 
                                        placeholder="Enter a short description of the church" 
                                        value= {this.state.description}
                                        onChange={this.onChange}
                                    />
                                </div>

                                <button type="submit" class="reg">Create Church Listing</button>
                            </form>
                        </div>

                        {/*
                        <div class="column1">
                            Payment
                        </div>  */}
                    </div>
                </div>
            </body>
        )
    }
}

ChurchDirectoryCreation.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });

  export default connect(
    mapStateToProps
  )(ChurchDirectoryCreation);

