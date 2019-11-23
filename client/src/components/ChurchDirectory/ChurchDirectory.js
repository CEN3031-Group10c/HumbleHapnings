import React from 'react';
import './ChurchDirectory.css';
import axios from 'axios';
import {Card, CardBody, CardTitle, Row, Col, Button} from 'reactstrap';
// import Card from 'react-bootstrap/Card';
import {randomImage} from '../RandomImage/randomImage'
import Header from "../Header/Header"


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
        
        // Maps the values based on the churches name
        const churchList = this.state.churchListings
            .map(listings => {
                return (
                    <Col>
                        <Card style={{ width: '20rem'}}>
                            <CardBody>
                                <CardTitle>{listings.name}</CardTitle>
                                <ul className="ChurchDirCardList">
                                    <li>Church Leader: {listings.pastor}</li>
                                    <li>Address: {listings.address}</li>
                                    <li>Email: {listings.email}</li>
                                    <li>Phone: {listings.phone}</li>
                                    <li>Description: {listings.description}</li>
                                </ul>
                                <Button>View Church</Button>
                            </CardBody>
                        </Card>
                    </Col>
  
                )
            });
            return ( 
                <div >
                    <Header/>
                    <div className={randomImage()}>
                        <Row>
                        {churchList} 
                        </Row>
                    </div>
                </div>
            )
    }
}

export default ChurchDirectory;
