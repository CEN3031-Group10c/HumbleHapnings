import React from 'react';
import './Home.css';
import PropTypes from "prop-types";
import Header from "../../components/Header/Header.js"
import { connect } from "react-redux";
import {randomImage} from '../../components/RandomImage/randomImage'
import {Link} from 'react-router-dom'; //PIKAD

class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
          this.setState({
            errors: nextProps.errors
          });
        }
    }

    // Updates the selected tab value so that the information on screen can switch based on what tab is pressed


    render() {
        return (
            <div>
                <Header/>
                <div className={randomImage()}/>
                <div>
                  <Link to="/ChurchLeader" classname="btn btn-large waves-effect waves-light hoverable">Church Leader</Link>
                </div>
                <div>
                  <Link to="/Admin" classname="btn btn-large waves-effect waves-light hoverable">Admin</Link>
                </div>
            </div>
        );
        //PIKAD the Admin
    }
}

Home.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });

  export default connect(
    mapStateToProps
  )(Home);
