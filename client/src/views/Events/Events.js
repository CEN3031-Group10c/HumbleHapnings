import React from 'react';
import './Events.css';
import Header from "../../components/Header/Header.js"
import {Card, CardBody, CardTitle, Row, Col, Button} from 'reactstrap';
import { Z_FIXED } from 'zlib';
import axios from 'axios';


// Sebastian and Diego

// Creating the event front end

 

class Events extends React.Component{
    selectedUpdate(id) {
        this.setState({
            selectedTab: id
        })
    }

    constructor (){
        super();
        this.state = {
            eventListings: []
        };
    }
    // Retrieves listings from the backend
    componentDidMount() {
        axios.get('api/EventCreation/list').then(res => {
            this.setState({eventListings: res.data});
        });
    }

    render(){

        const {selectedTab} = this.props

        // creating the test array for the mapping 
        /*const events = [{name: "Church Meeting",
        date: "11/15", 
        location: "Conference Room",
        description: "Discussing upcoming fair",
        hostChurch: "Our-Church",
        tags: ["Discussion, ", "Social commitment, ", "Planning"]},

        {name: "6 PM Sunday Mass",
        date: "11/13",
        location: "Main Church",
        description: "Mass, praying",
        hostChurch: "Your-Church",
        tags: ["Weekly mass, ", "Devotion, ", "Social"]}]*/

        function randomImage(){

            var backgroundImages = ['book1-background', 'field1-background'];
            var randomIndex = Math.floor(Math.random() * backgroundImages.length);
            var randomImg = backgroundImages[randomIndex];
            if(randomIndex == 0) //passing in the variable that is part of this class to be changed if the background is dark
                 letterColor = "white";
            return randomImg;
        }  

        //mapping the elements of the array
        //outline 
        const eventMaping = this.state.eventListings.map(event => {
            return (
                <div class="columnEvents" style={{display: 'flex'}, {padding: '0px'}, {paddingTop: '0px'}, 
                                {justifyContent:'center', alignItems:'center'}, {paddingBottom: '50px'}}>
                    <div class="containerEvent">
                        <text style={{fontSize: 45}}>{event.name}</text>
                        <tr style={{fontSize: 23}}>By: {event.hostChurch}</tr>
                        <tr style={{fontSize: 19}}>{event.location}</tr>
                        <tr style={{fontSize: 19}}>{event.date}</tr>
                        <tr style={{fontSize: 19}}>Description: {event.description}</tr>
                        <tr style={{fontSize: 19}}>Related to: {event.tags.map ( tag => {
                            return (
                                <text style={{fontWeight: "bold"}}>{tag}</text>
                            )
                        })}
                        </tr>
                    </div>  
                    <div style={{paddingBottom: '30px'}}>{"   "}</div>   
            </div>            
        );
    });

    var letterColor = "black";
        //organazing page components

            return (
                <div>
                <Header/>
                <body className="Events">
                    <div className={randomImage()}> 
                        <div class="container">
                            <h1 style={{color: letterColor, fontSize: 70,  display: 'flex',  justifyContent:'center', alignItems:'center'}}>Events</h1>
                            
                            <text style={{color: letterColor, fontSize: 30,  display: 'flex',  justifyContent:'center', alignItems:'center'}}>Check out these awesome events happening in your community!</text>
                                
                                <form>
                                    <div style={{paddingBottom: '30px'}}>{"   "}</div>        
                                </form>
                                
                                <Row>
                                    <div className = "columnE">
                                        <div className = "leftSide">{eventMaping}</div>
                                    </div>
                                    
                                    <div className = "columnB">
                                        <div className = "rightSide">Place for Buttons and search bar</div>
                                    </div>
                                </Row>
                        </div>
                    </div>
                </body>
                </div>
            )
    }
}

export default Events;