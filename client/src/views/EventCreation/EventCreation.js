import React from 'react';
import axios from "axios";
import Header from '../../components/Header/Header';
import CheckoutForm from '../../components/CheckoutForm/CheckoutForm';
import {StripeProvider, Elements} from 'react-stripe-elements';
import Tags from '../../components/Tags/Tags';




class EventCreation extends React.Component{

    constructor (props){
        super(props);
        this.state = {
            name: "",
            date: "",
            location: "",
            description: "",
            hostChurch: "",
            tags: [],
            show: false,
            purchaseComplete: false,
        };
    }

    //state function to confirm payments
    onPurchase = (value) =>{
        this.setState({
            purchaseComplete: value
        })
        //confirm if user has paid for event
        if (this.state.purchaseComplete === true){
            const newEvent = {
                name: this.state.name,
                date: this.state.date,
                location: this.state.location,
                description: this.state.description,
                hostChurch: this.state.hostChurch,
                tags: this.state.tags,
            }
    
            console.log(newEvent);
    
            // Sends the user data to the database and then redirects to the homepage using axios
            axios
            .post("api/EventCreation/create", newEvent)
        }

    }

    makeAnotherEvent = () =>{
        this.setState({
            name: "",
            date: "",
            location: "",
            description: "",
            hostChurch: "",
            tag: [],
            show: false,
            purchaseComplete: false,
        })
    }

    addTag = (val) => {
        const taglist = this.state.tags.concat(val);
        this.setState({
            tags: taglist
        });
    }
    popTag = () => {
        this.state.tags.pop();
        this.setState({
            tags: this.state.tags
        });
    }

    
    //Updates the value of the specific id that is changed when inputting information into text box
    onChange = event => {
        this.setState({ [event.target.id]: event.target.value});
    }

    //state function for closing and opening stripe payment modal
    showModal = () => {
        this.setState({
            show: !this.state.show,
            purchaseComplete: false,
        })
    }

    // Creates a new church listing when the submit button is pressed
    onSubmit = event => {
        this.showModal();
        event.preventDefault();
    };
    // Needs new css to cleanup
    render(){
        return(
            <div>
                <Header/>
                <div className="churchCreationContainer">
                    <body className="col s8 offset-s2 colorDiv2">
                        <div className="churchCreationPad">
                            <h1>Create Event</h1>
                            <div className="row-container">
                                <div className="column2">
                                    <form onSubmit = {this.onSubmit}>
                                        <h5>Please fill in this form to create an event.</h5>
                                        <div className="regName">
                                            <label for="regName"><b>Event Name</b></label>
                                            <input 
                                                id="name" 
                                                type="text" 
                                                placeholder="Enter Name of Event" 
                                                value= {this.state.name}
                                                onChange={this.onChange}
                                                required
                                            />

                                            <label for="regDate"><b>Date</b></label>
                                            <input 
                                                id="date" 
                                                type="date" 
                                                placeholder="Enter date of event" 
                                                value= {this.state.date}
                                                onChange={this.onChange}
                                                required
                                            />
                                            
                                            <label for="regLocation"><b>Location</b></label>
                                            <input 
                                                id="location" 
                                                type="text" 
                                                placeholder="Enter Location" 
                                                value= {this.state.location}
                                                onChange={this.onChange}
                                                required
                                            />

                                            <label for="regChurch"><b>Host Church</b></label>
                                            <input 
                                                id="hostChurch" 
                                                type="text" 
                                                placeholder="Enter Name of Host Church"
                                                value= {this.state.hostChurch} 
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
                                            <label for="regTags"><b>Tags</b></label>
                                            <Tags addTag={this.addTag} popTag={this.popTag}/>

                                        </div>

                                        <button id="eventcreation" type="submit" class="reg">Create Event</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </body>
                </div>
                
                <StripeProvider apiKey="pk_test_8o2KG0ESrNywOAbv3v3OWG3s00HIu8oWDs">
                    <Elements>
                        <CheckoutForm 
                            show={this.state.show}
                            onClose={this.showModal}
                            purchaseComplete={this.purchaseComplete}
                            onPurchase={this.onPurchase}
                            makeAnotherEvent={this.makeAnotherEvent}
                        />
                    </Elements>
                </StripeProvider> 

            </div>
        )
    }
}

export default EventCreation;
