import React from 'react';
import './Events.css';
import Header from "../../components/Header/Header.js"
import {Row} from 'reactstrap';
import axios from 'axios';
import "../Home/Home.css"
import {Link} from 'react-router-dom';


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
            if(randomIndex === 0) //passing in the variable that is part of this class to be changed if the background is dark
                 letterColor = "white";
            return randomImg;
        }  

        //mapping the elements of the array
        //outline 
        const eventMaping = this.state.eventListings.map(event => {
            return (
                <div className="columnEvents" style={{display: 'flex'}, {padding: '0px'}, {paddingTop: '0px'}, {justifyContent:'center', alignItems:'center'}, {paddingBottom: '50px'}}>
                    <div className="containerEvent">
                        <text style={{fontSize: 45}}>{event.name}</text>
                        <tr style={{fontSize: 23}}>By: {event.hostChurch}</tr>
                        <tr style={{fontSize: 19}}>Location: {event.location}</tr>
                        <tr style={{fontSize: 19}}>Date: {event.date}</tr>
                        <tr style={{fontSize: 19}}>Time: {event.time}</tr>
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
        // Megan - worked on code formatting plus changed return to proper format to work with linking to webpages vs. 
        // puting component over top of home page

        return (
            <div>
                <Header/>
                <body className="Events">
                    <div className={randomImage()}> 
                        <div className="container">
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
                                        <div className = "rightSide">
                                            Place for Buttons and search bar
                                            <Link to="/EventCreation"><button> Create an Event</button></Link>
                                        </div>
                                        
                                    </div>
                                </Row>
                        </div>
                    </div>
                </body>
            </div>
        );
    }
}

export default Events;