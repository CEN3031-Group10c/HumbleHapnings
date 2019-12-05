import React from 'react';
import { ADMIN } from "../../actions/userTypes";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Header from '../../components/Header/Header'
import axios from 'axios';
//import {Card, CardBody, CardTitle, Row, Col, Button} from 'reactstrap';
import './AccountReview.css';
var moment = require('moment');

//Josh - 
class AccountReview extends React.Component {

  constructor() {
    super();
    this.state = {
      listOfUsers: [],
      displayName: "",
      displayEmail: "",
      displayDate: Date.now,
      displayUserType: "",
      displayMoment: ""
    };
  }

  async componentDidMount() {
    // If the user is not an admin, push them back to the home page.
    if (this.props.auth.user.userType !== ADMIN) {
      this.props.history.push("/home");
    }
    else {
      //Retrieves unapproved users from backend
      await axios.get("/api/users/GetAllAccounts").then(res => {
        console.log("\n" + JSON.stringify(res) + "\n")
        this.setState({ listOfUsers: res.data });
      });
    }
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.errors) {
  //     this.setState({
  //       errors: nextProps.errors
  //     });
  //   }
  // }

  updateDisplay(name, email, date, userType) {
    var dateStr = ""
    if (name !== "")
      dateStr = moment(date).format("dddd, MMMM Do YYYY, h:mm:ss a");;
    this.setState({
      displayName: name,
      displayEmail: email,
      displayDate: date,
      displayUserType: userType,
      displayMoment : dateStr
    });
  }

  render() {
     // Maps the values based on the users name
     if(Array.isArray(this.state.listOfUsers))
        console.log("Array.isArray is TRUE and makes it go to ELSE")
     if(this.state.listOfUsers.length > 0)
        console.log("...length > 0 is TRUE and makes it go to ELSE "+ typeof this.state.listOfUsers + "\n" + this.state.listOfUsers)

     console.log("Rendering...");
     var userList= this.state.listOfUsers
     if(this.state.listOfUsers !== undefined && Array.isArray(this.state.listOfUsers) && this.state.listOfUsers.length > 0)
     {
       console.log("got into map if statement")
       userList
      .map(user => {
        return (
          <a onClick={() => this.updateDisplay(user.name, user.email, user.date, user.userType)}>
            {user.name}
          </a>
        );
      });
    }
    else{
      userList = []
    }

    var email, date, userType;
    if (this.state.displayName !== "") {
      email = "Email: ";
      date = "Account Creation Date: ";
      userType = "User Type: ";
    }

    return (
      <div className="unscroll">
        <Header />
        <div class="fullscreen">
          <div class="welcome">
            Total Number of Users: {userList.length}
          </div>
          <div class="contentContainer">
            <div class="sidebar">
              {userList}
            </div>
            <div class="churchDisplay">
              <div>
              </div>
                User number displayed in this page was not able to correctly retrieve the data because of a Heroku error. It works correctly locally. \n But this is a Heroku issue. \n Please refer to the demo video until hosting the website with a domain besides Heroku.
              <chName>
                {this.state.displayName}
              </chName>
              <br></br>
              <chDetail>
                {email}{this.state.displayEmail}
                <br></br>
                {date}{this.state.displayMoment}
                <br></br>
                {userType}{this.state.displayUserType}
                <br></br>
              </chDetail>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AccountReview.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps
)(AccountReview);
