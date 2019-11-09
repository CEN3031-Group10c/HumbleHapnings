import React from 'react';
import './ChurchDirectoryCreation.css';

class ChurchDirectoryCreation extends React.Component{
    render(){
        return(
            <body className="reg">
                <div class="container">
                    <h1>Create Church Listing</h1>
                    <div class="row-container">
                        <div class="column2">
                            <form>
                                <p>Please fill in this form to create a church listing.</p>
                                <div class="regName">
                                    <label for="regName"><b>Name</b></label>
                                    <input 
                                        className="reg"
                                        id="regName" 
                                        type="text" 
                                        placeholder="Enter Name of Church" 
                                        required
                                    />

                                    <label for="regPastor"><b>Pastor</b></label>
                                    <input 
                                        className="reg"
                                        id="regPastor" 
                                        type="text" 
                                        placeholder="Enter Pastor Name" 
                                        required
                                    />
                                    
                                    <label for="regEmail"><b>Email</b></label>
                                    <input 
                                        className="reg"
                                        id="regEmail" 
                                        type="text" 
                                        placeholder="Enter Church Email" 
                                        required
                                    />

                                    <label for="regAddress"><b>Address</b></label>
                                    <input 
                                        className="reg"
                                        id="regAddress" 
                                        type="text" 
                                        placeholder="Enter Church Address" 
                                        required
                                    />

                                    <label for="regPhone"><b>Confirm Phone</b></label>
                                    <input 
                                        className="reg" 
                                        id="regPhone" 
                                        type="text" 
                                        placeholder="Enter Church Phone Number" 
                                        required
                                    />

                                    <label for="regDescription"><b>Description</b></label>
                                    <input 
                                        className="reg"
                                        id="regDescription" 
                                        type="text" 
                                        placeholder="Enter a short description of the church" 
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

export default ChurchDirectoryCreation;
