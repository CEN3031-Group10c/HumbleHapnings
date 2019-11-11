import React from 'react';
import './ChurchDirectory.css';
import axios from 'axios';
//import {Card, CardBody, CardTitle} from 'reactstrap';
import Card from 'react-bootstrap/Card';


class ChurchDirectory extends React.Component {

    constructor (){
        super();
        this.state = {
            churchListings: []
        };
    }
    // Retrieves listings from the backend
    componentDidMount() {
        axios.get('api/ChurchCreation/list').then(res => {
            this.setState({churchListings: res.data});
        });
    }

    render(){

        const {selectedTab} = this.props

        const churchList = this.state.churchListings
            .map(listings => {
                return (
                    <div key={listings.name}>
                        
                        <h3>{listings.name} </h3>
                        <h4>Pastor: {listings.pastor}</h4>
                        <h4>Address: {listings.address}</h4>
                        <h4>Email: {listings.email}</h4>
                        <h4>Phone: {listings.phone}</h4>
                        <h4>Description: {listings.description}</h4>
                    </div>

                )
            });
        // Does not display anything if the church directory tab wasn't pressed
        console.log(selectedTab);
        if (selectedTab == 3)
        {
            return <div>{churchList}</div>
        }
        return <div></div>
    }
}

export default ChurchDirectory;
