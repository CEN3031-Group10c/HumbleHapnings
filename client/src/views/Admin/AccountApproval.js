import React from 'react';
import { ADMIN } from "../../actions/userTypes";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Header from '../../components/Header/Header'
import axios from 'axios';
//import {Card, CardBody, CardTitle, Row, Col, Button} from 'reactstrap';
import './AccountApproval.css';

function ApproveDeletebuttons(props) {
  const userSelected = props.userSelected;
  const { updateDisplayedUserType } = props;
  if (userSelected) {
    return (
      <div>
        <button class="btn waves-effect waves-light green"
          onClick={() => updateDisplayedUserType(true)}
        >
          Approve
        </button>
        <button class="btn waves-effect waves-light red"
          onClick={() => updateDisplayedUserType(false)}
        >
          Reject
        </button>
      </div>
      );
  }
  return <div/>;
}

//Josh - AdminPage
class AccountApproval extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      unapprovedUsers: [],
      displayName: "",
      displayEmail: "",
      displayDate: Date.now,
      displayUserType: ""
    };
  }

  componentDidMount() {
    // If the user is not an admin, push them back to the home page.
    if (this.props.auth.user.userType !== ADMIN) {
      this.props.history.push("/home");
    }
    else {
      //Retrieves unapproved users from backend
      axios.get("/api/users/AccountApproval").then(res => {
        this.setState({ unapprovedUsers: res.data });
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
    this.setState({
      displayName: name,
      displayEmail: email,
      displayDate: date,
      displayUserType: userType
    });
  }

  updateDisplayedUserType(approved) {
    var requestData = {
      userData: {
        userType: this.state.displayUserType,
        email: this.state.displayEmail
      },
      approved: approved
    }
    console.log("Pre Axios - " + JSON.stringify(requestData));
    axios.post("/api/users/UpdateUserType", requestData);
    // if (approved)
    // {
    //   alert("User Approved");
    // }
    // else
    // {
    //   alert("User Denied");
    // }
  }

  render() {
    // Maps the values based on the users name
    const userList = this.state.unapprovedUsers
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
            Accounts Awaiting Approval
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
                {date}{this.state.displayDate}
                <br></br>
                {userType}{this.state.displayUserType}
                <br></br>
                <ApproveDeletebuttons 
                  userSelected={this.state.displayName !== ""} 
                  updateDisplayedUserType={this.updateDisplayedUserType.bind(this)}
                />
              </chDetail>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AccountApproval.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps
)(AccountApproval);