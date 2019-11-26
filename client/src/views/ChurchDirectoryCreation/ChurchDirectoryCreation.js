import React from 'react';
import './ChurchDirectoryCreation.css';
import axios from "axios";
import storage from '../../Firebase/firebase'

//From: Lukas
/* 
This class is the form for church creation
*/
class ChurchDirectoryCreation extends React.Component{

    constructor (){
        super();
        this.state = {
            name: "",
            pastor: "",
            address: "",
            email: "",
            phone: "",
            denomination: "",
            missionStatement: "",
            description: "",
            url: "",
            
            // For image upload 
            imageUpload: false,
            imageUploadDone: false,
            image: null
        };
    }
    
    //Updates the value of the specific id that is changed when inputting information into text box
    onChange = event => {
        this.setState({ [event.target.id]: event.target.value});
    }

    // Handler for uploading files 
    fileSelectedHandler = event => {
        this.setState({ imageUpload: true })

        const uploadTask = storage.ref(`images/${this.state.name}`).put(event.target.files[0]);
        uploadTask.on(
            "state_changed",
            snapshot => {
                // Progress function
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                console.log(progress)
            },
            error => {
                console.log(error)
            },
            () => {
                storage
                    .ref("images")
                    .child(this.state.name)
                    .getDownloadURL()
                    .then(url => {
                        this.setState({ url })
                        this.setState({ imageUploadDone: true })
                    });
            }
        )
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
            denomination: this.state.denomination,
            missionStatement: this.state.missionStatement,
            description: this.state.description,
            url: this.state.url
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
            <div>
                <div className="churchCreationContainer">
                    <body className="col s8 offset-s2 colorDiv2">
                        <div className="churchCreationPad">
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

                                            <label for="regDenomination"><b>Denomination</b></label>
                                            <input 
                                                id="denomination" 
                                                type="text" 
                                                placeholder="Enter the Church's Denomination" 
                                                value= {this.state.denomination}
                                                onChange={this.onChange}
                                                required
                                            />

                                            <label for="regMissionStatement"><b>Mission Statement</b></label>
                                            <input 
                                                id="missionStatement" 
                                                type="text" 
                                                placeholder="Enter the Mission Statement of the Church" 
                                                value= {this.state.missionStatement}
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
                                            <label for="regImage"><b>Church Image   </b></label>
                                            <input 
                                                id="image" 
                                                type="file"
                                                onChange={this.fileSelectedHandler}
                                            />
                                        </div>

                                        <button 
                                            type="submit" 
                                            class="reg"
                                            // Makes it so they can't submit while the image is uploading
                                            disabled={ this.state.imageUpload && (!this.state.imageUploadDone) }
                                        >
                                            Create Church Listing
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </body>
                </div>
            </div>
        )
    }
}

export default ChurchDirectoryCreation;
