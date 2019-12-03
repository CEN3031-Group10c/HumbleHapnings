import React from 'react';
import './UnderConstruction.css';
import PropTypes from "prop-types";
import Header from "../../components/Header/Header.js"
import { connect } from "react-redux";

class UnderConstruction extends React.Component {

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
          this.setState({
            errors: nextProps.errors
          });
        }
    }

    render() {
        return (
            <div>
                <Header/>
                <div className="underconstruction1">
                    <div className="container">
                        <div className="center-align colorDiv2">
                                <h3>Sorry!</h3>
                                <h4>This Feature Is Under Construction.</h4>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

UnderConstruction.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });

  export default connect(
    mapStateToProps
  )(UnderConstruction);
