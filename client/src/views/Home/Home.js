import React from 'react';
import './Home.css';
import PropTypes from "prop-types";
import Header from "../../components/Header/Header.js"
import { connect } from "react-redux";
import {randomImage} from '../../components/RandomImage/randomImage'

class Home extends React.Component {


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
            </div>
        );
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
