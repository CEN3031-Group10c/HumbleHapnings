import React from 'react';
import './Events.css';

// Sebastian and Diego

// Creating the event front end

class Events extends React.Component{
    render(){

        // creating the test array for the mapping 
        const events = [{name: "Meeting",
        date: "11/15", 
        location: "house",
        description: "Praying",
        hostChurch: "Church",
        tags: ["fun, ", "religious, ", "social"]},

        {name: "Meeting2",
        date: "11/13",
        location: "house",
        description: "Praying",
        hostChurch: "Church",
        tags: ["fun, ", "Yearly, ", "social"]}]

        //mapping the elements of the array
        const eventMaping = events.map(event => {
            return (
                <div class="column1" style={{padding: '30px'}, {paddingBottom: '30px'}}>
                    <div class="containerEvent">
                        <h1>{event.name}</h1>
                        <tr>by: {event.hostChurch}</tr>
                        <tr>{event.location}</tr>
                        <tr>{event.date}</tr>
                        <tr>description: {event.description}</tr>
                        <tr>Related to: {event.tags.map ( tag => {
                            return (
                                <text style={{fontWeight: "bold"}}>{tag}</text>
                            )
                        })}
                    </tr>
                </div>
            </div>
        );
    });

        //organazing page components
        return (
            <body className="Events">
                <div class="container">
                    <h1 style={{fontSize: 70}}>Events</h1>
                    <div class="row-container">
                    <text style={{fontSize: 30}}>Check out these awesome events happening in your community!</text>
                        
                            <form>
                            
                                <div>{eventMaping}</div>
                            </form>
                        
                    </div>
                </div>
            </body>

        )
    }
}

export default Events;