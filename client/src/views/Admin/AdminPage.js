import React from 'react';
import { ADMIN } from "../../actions/userTypes";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Header from '../../components/Header/Header';
import {Link} from 'react-router-dom';
import "./AdminPage.css";

//Josh - AdminPage
class AdminPage extends React.Component{

    componentDidMount() {
        // If the user is not an admin, push them back to the home page.
        if (this.props.auth.user.userType !== ADMIN) {
            this.props.history.push("/home");
        }
    }
    
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
          this.setState({
            errors: nextProps.errors
          });
        }
    }
    

    // Needs new css to cleanup
    render(){
        return(
          <div className="cathedral1-background">
            <Header/>  
            <div className="container">
              <div className="col s12 center-align colorDiv2">
                <div className="row">
                  <div className="col s12">
                    <h4>Administrator Abilities</h4>
                    <hr/>
                  </div>
                  <div className="col s12" style={{padding: 10}}>
                    <Link 
                      className="btn btn-large waves-effect waves-light hoverable full-width" 
                      to="/AccountReview" 
                      style={{color: "white"}} >
                      View All Accounts
                    </Link>  
                  </div>
                  <div className="col s12" style={{padding: 10}}>
                    <Link 
                      className="btn btn-large waves-effect waves-light hoverable full-width" 
                      to="/AccountApproval" 
                      style={{color: "white"}} >
                      Account Approval
                    </Link>  
                  </div>
                  <div className="col s12" style={{padding: 10}}>
                    <Link 
                      className="btn btn-large waves-effect waves-light hoverable full-width" 
                      to="/ChurchCreation"
                      style={{color: "white"}} >
                      Create a Church Directory
                    </Link>  
                  </div>
                  <div className="col s12" style={{padding: 10}}>
                    <Link 
                      className="btn btn-large waves-effect waves-light hoverable full-width" 
                      to="/AdminChurchDirectory"
                      style={{color: "white"}} >
                      Manage Church Directory Listings
                    </Link>  
                  </div>
                  <div className="col s12" style={{padding: 10}}>
                    <Link 
                      className="btn btn-large waves-effect waves-light hoverable full-width" 
                      to="/UnderConstruction"
                      style={{color: "white"}} >
                      Select the Church Spotlight
                    </Link>  
                  </div>
                  <div className="col s12" style={{padding: 10}}>
                    <Link 
                      className="btn btn-large waves-effect waves-light hoverable full-width" 
                      to="/UnderConstruction"
                      style={{color: "white"}} >
                      Manage Events
                    </Link>  
                  </div>
                  <div className="col s12" style={{padding: 10}}>
                    <Link 
                      className="btn btn-large waves-effect waves-light hoverable full-width" 
                      to="/ChurchLeader"
                      style={{color: "white"}} >
                      Church Leader Features
                    </Link>  
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

AdminPage.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });

  export default connect(
    mapStateToProps
  )(AdminPage);

