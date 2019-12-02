import React from 'react';
import { ADMIN, CHURCH_LEADER } from "../../actions/userTypes";
import { connect } from "react-redux";
import PropTypes from "prop-types";
//import Header from '../../components/Header/Header'

//Josh - AdminPage
class ChurchLeader extends React.Component{

    componentWillMount() {
        console.log("User Type " + this.props.auth.user.userType);
        // If the user is not an admin, push them back to the home page.
        if (this.props.auth.user.userType !== ADMIN  &&
            this.props.auth.user.userType !== CHURCH_LEADER) {
            this.props.history.push("/home");
            console.log("Unauthenticated user pushed to home.");
        }
        console.log("Passed")
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
      console.log("Does it render");
        return(
            <div>
              <h4>CHURCH LEADER</h4>
            </div>
        )
    }
}

ChurchLeader.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });

  export default connect(
    mapStateToProps
  )(ChurchLeader);
