import React from 'react';
import './ChurchDirectory.css';
import axios from 'axios';
import {Card, CardBody, CardTitle, Row, Col, Button} from 'reactstrap';
// import Card from 'react-bootstrap/Card';


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
                    <Col>
                        <Card style={{ width: '20rem'}}>
                            <CardBody>
                                <CardTitle>{listings.name}</CardTitle>
                                <ul className="ChurchDirCardList">
                                    <li>Pastor: {listings.pastor}</li>
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
        // Does not display anything if the church directory tab wasn't pressed
        console.log(selectedTab);
        if (selectedTab == 3)
        {
            return ( 
                <div >
                    <Row>
                    {churchList} 
                    </Row>
                </div>
            )
        }
        return <div></div>
    }
}

export default ChurchDirectory;
