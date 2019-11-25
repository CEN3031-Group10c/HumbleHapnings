import React from 'react';
import './ChurchDirectory.css';
import Header from "../Header/Header";
import axios from 'axios';
import {Card, CardBody, CardTitle, Row, Col, Button} from 'reactstrap';
// import Card from 'react-bootstrap/Card';


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
            displayDescription: ""
        };
    }
    
    // Retrieves listings from the backend
    componentDidMount() {
        axios.get('api/ChurchCreation/list').then(res => {
            this.setState({churchListings: res.data});
        });
    }

    updateDisplay(name, leader, address, email, phone, description) {
        this.setState({
            displayName: name,
            displayLeader: leader,
            displayAddress: address,
            displayEmail: email,
            displayPhone: phone,
            displayDescription: description
        });
    }

    render(){
        // Maps the values based on the churches name
        const churchList = this.state.churchListings
            .map(listings => {
                return (
                    <a onClick={() => this.updateDisplay(listings.name, listings.pastor, listings.address, listings.email, listings.phone, listings.description)}>
                        {listings.name}
                    </a>
                )
            });
        return ( 
            <div>
                <Header/>
                <dix class="welcome">
                    Church Directory
                </dix>
                <div class="row">
                    <div class = "column">
                        <div class="sidebar">
                            {churchList}
                        </div>
                    </div>
                    <div class = "column"> 
                        <div class="churchDisplay">
                            <chName>
                            {this.state.displayName}
                            </chName>
                            <br></br>
                            <chDetail>
                            {this.state.displayAddress}
                            </chDetail>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ChurchDirectory;
