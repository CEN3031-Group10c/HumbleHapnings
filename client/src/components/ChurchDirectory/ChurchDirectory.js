import React from 'react';
import './ChurchDirectory.css';
import Header from "../Header/Header";
import axios from 'axios';
import {Card, CardBody, CardTitle, Row, Col, Button} from 'reactstrap';
// import Card from 'react-bootstrap/Card';
import {randomImage} from '../RandomImage/randomImage'
import storage from '../../Firebase/firebase'

class ChurchDirectory extends React.Component {

    constructor(){
        super();
        this.state = {
            churchListings: [],
            displayName: "",
            displayLeader: "",
            displayAddress: "",
            displayEmail: "",
            displayPhone: "",
            displayDenomination: "",
            displayMissionStatement: "",
            displayDescription: "",
            imageUrl: ""
        };
    }
    
    // Retrieves listings from the backend
    componentDidMount() {
        axios.get('api/ChurchCreation/list').then(res => {
            this.setState({churchListings: res.data});
        });
    }

    updateDisplay(name, leader, address, email, phone, denomination, missionStatement, description, url) {
        this.setState({
            displayName: name,
            displayLeader: leader,
            displayAddress: address,
            displayEmail: email,
            displayPhone: phone,
            displayDenomination: denomination,
            displayMissionStatement: missionStatement,
            displayDescription: description,
            imageUrl: url
        });
    }

    render(){


        // Maps the values based on the churches name
        const churchList = this.state.churchListings
            .map(listings => {
                return (
                    <a onClick={() => this.updateDisplay(listings.name, listings.pastor, listings.address, listings.email, listings.phone, listings.denomination, listings.missionStatement, listings.description, listings.url)}>
                        {listings.name}
                    </a>
                )
            });
        
        var testMission, about, address, email, phone, denomination, description;
        if(this.state.displayName != "") {testMission = "\"This is a test mission statement.\"";}
        if(this.state.displayName != "") {about = "About: ";}
        if(this.state.displayName != "") {address = "Address: ";}
        if(this.state.displayName != "") {email = "Email: ";}
        if(this.state.displayName != "") {phone = "Phone: ";}
        if(this.state.displayName != "") {denomination = "Denomination: ";}
        if(this.state.displayName != "") {description = "Description: ";}

        return ( 
            <div className="unscroll">
                <Header/>
                <div class="fullscreen">
                    <div class="welcome">
                        Church Directory
                    </div>
                    <div class="contentContainer">
                        <div class="sidebar">
                            {churchList}
                        </div>
                        <div className="churchImage">
                            <img 
                            src = {this.state.imageUrl}
                            width = "300"
                            height = "200"
                            />
                        </div>
                        <div class="churchDisplay">
                            <chName>
                                {this.state.displayName}
                            </chName>
                            <br></br>
                            <missionStatement>
                                {testMission}
                            </missionStatement>
                            <br></br>
                            <br></br>
                            {about}
                            <br></br>
                            <chDetail>
                                {address}{this.state.displayAddress}
                                <br></br>
                                {email}{this.state.displayEmail}
                                <br></br>
                                {phone}{this.state.displayPhone}
                                <br></br>
                                {denomination}{this.state.displayDenomination}
                                <br></br>
                                {description}{this.state.displayDescription}
                            </chDetail>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ChurchDirectory;
