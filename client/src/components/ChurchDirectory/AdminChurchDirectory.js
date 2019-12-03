import React from 'react';
import './ChurchDirectory.css';
import Header from "../Header/Header";
import axios from 'axios';
import { ADMIN } from "../../actions/userTypes";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class AdminChurchDirectory extends React.Component {

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
        if (this.props.auth.user.userType !== ADMIN) {
            this.props.history.push("/home");
        }
        else
        {
            axios.get('api/ChurchCreation/list').then(res => {
                this.setState({churchListings: res.data});
            });
        } 
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
          this.setState({
            errors: nextProps.errors
          });
        }
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

    renderButton() {
        if (this.state.displayName !== "") {
            return(
                <button onClick={this.deleteChurch}>
                    Click to Delete Church Listing
                </button>
            )
        }
        else {
            return
        }
    }

    //Function to delete churches
    deleteChurch = event => {
        event.preventDefault();

        const churchListing = {
            name: this.state.displayName,
            pastor: this.state.displayLeader,
            address: this.state.displayAddress,
            email: this.state.displayEmail,
            phone: this.state.displayPhone,
            denomination: this.state.displayDenomination,
            missionStatement: this.state.displayMissionStatement,
            description: this.state.displayDescription,
            url: this.state.imageUrl
        }

        // Sends delete request to backend and refreshes church list
        axios
        .delete("api/ChurchCreation/delete", { data: churchListing })
        .then(this.componentDidMount())
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
        if(this.state.displayName !== "") {
            testMission = "\"This is a test mission statement.\"";
            about = "About: ";
            address = "Address: ";
            email = "Email: ";
            phone = "Phone: ";
            denomination = "Denomination: ";
            description = "Description: ";
        }
        if(this.state.displayMissionStatement !== "") {testMission = "\"";}

        return ( 
            <div className="unscroll">
                <Header/>
                <div className="fullscreen">
                    <div className="welcome">
                        Church Directory
                    </div>
                    <div className="contentContainer">
                            <div className="sidebar">
                                {churchList}
                            </div>
                        <div className="churchImage">
                            <img 
                            src = {this.state.imageUrl}
                            width = "350"
                            height = "250"
                            />
                        </div>
                        <div class="churchDisplay">
                            <chName>
                                {this.state.displayName}
                            </chName>
                            <br></br>
                            <missionStatement>
                                {testMission}{this.state.displayMissionStatement}{testMission}
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
                                <br></br>
                                {this.renderButton()}
                            </chDetail>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

AdminChurchDirectory.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });
  
  export default connect(
    mapStateToProps
  )(AdminChurchDirectory);