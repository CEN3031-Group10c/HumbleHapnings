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

  constructor(props) {
    super(props);
    this.state = {
      users: [],
      displayName: "",
      displayEmail: "",
      displayDate: Date.now,
      displayUserType: "",
      displayMoment: ""
    };
  }

  componentDidMount() {
    // If the user is not an admin, push them back to the home page.
    if (this.props.auth.user.userType !== ADMIN) {
      this.props.history.push("/home");
    }
    else {
      //Retrieves unapproved users from backend
      axios.get("/api/users/GetAllAccounts").then(res => {
        this.setState({ users: res.data });
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
    const userList = this.state.users
      .map(user => {
        return (
          <a onClick={() => this.updateDisplay(user.name, user.email, user.date, user.userType)}>
            {user.name}
          </a>
        )
      });

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