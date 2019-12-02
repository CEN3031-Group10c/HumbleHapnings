import React from 'react';
import './Events.css';
import Header from "../../components/Header/Header.js"
import {Row} from 'reactstrap';
import axios from 'axios';
import "../Home/Home.css"
import {Link} from 'react-router-dom';
import SelectBoxMenu from './dropDown';
import Search from './Search.js';


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
            eventListings: [],
            typeOfInputForSearch: "text",
            searchFilter: "name",
            filterText: '',
        };
    }

    filterUpdate(value) {
        //For filter
        this.setState({
          filterText: value
        });
      }

    updateFilter(item) {
        this.setState({
            searchFilter: item.value
        });
        
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
        const eventMaping = this.state.eventListings
        .filter(eventListing => {
                if (this.state.searchFilter == "name")
                    return   eventListing.name.toLowerCase().indexOf(this.state.filterText.toLowerCase()) >= 0
                if (this.state.searchFilter == "date")
                    return   eventListing.date.toLowerCase().indexOf(this.state.filterText.toLowerCase()) >= 0
                if (this.state.searchFilter == "location")
                    return   eventListing.location.toLowerCase().indexOf(this.state.filterText.toLowerCase()) >= 0
                if (this.state.searchFilter == "hostChurch")
                    return   eventListing.hostChurch.toLowerCase().indexOf(this.state.filterText.toLowerCase()) >= 0
                if (this.state.searchFilter == "tag" && eventListing.tags[0] != null)
                {
                    for (const [index, value] of eventListing.tags.entries())
                    {
                        console.log("index: " + index)
                        console.log("value: " + value)
                        if( eventListing.tags[index].toLowerCase().indexOf(this.state.filterText.toLowerCase()) >= 0 )
                            return eventListing.tags[index].toLowerCase().indexOf(this.state.filterText.toLowerCase()) >= 0
                       
                    }
                }
        })
        .map(event => {
            return (
                <div class="columnEvents" style={{display: 'flex'}, {padding: '0px'}, {paddingTop: '0px'}, {justifyContent:'center', alignItems:'center'}}>
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
                </div>            
        );
    });

    var letterColor = "black";
        //organizing page components

        
        // Megan - worked on code formatting plus changed return to proper format to work with linking to webpages vs. 
        // puting component over top of home page

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
                                        <div className = "rightSide">
                                            <Link to="/EventCreation"><button style={{paddingBottom: '15px'},{borderRadius: '20px'}}> Create an Event</button></Link>
                                            
                                            Search:
                                            <Search filterText={this.state.filterText}
                                                    filterOn = {this.state.searchFilter}
                                                    filterUpdate={this.filterUpdate.bind(this)}
                                            />


                                            Filter On:
                                            <SelectBoxMenu
                                                width={150}
                                                items = {[
                                                    {value: 'name', id: 1 },
                                                    {value: 'location', id: 2 },
                                                    {value: 'date', id: 3 },
                                                    {value: 'hostChurch', id: 4 },
                                                    {value: 'tag', id: 5 }
                                                ]}
                                                updateFilter = {this.updateFilter.bind(this)}
                                                
                                             />
                                        

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