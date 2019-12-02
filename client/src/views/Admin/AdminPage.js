import React from 'react';
import { ADMIN } from "../../actions/userTypes";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Header from '../../components/Header/Header'

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
            <div>
              <Header/>
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

