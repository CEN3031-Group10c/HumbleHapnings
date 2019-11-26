import { connect } from "react-redux";
import PropTypes from "prop-types";
import React from 'react';

class AuthExamplePage extends React.Component {

    constructor() {
        super();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
          this.setState({
            errors: nextProps.errors
          });
        }
    }

    render() {
        const { user } = this.props.auth;
        return (<div></div>);
    }


}

AuthExamplePage.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });

  export default connect(
    mapStateToProps
  )(AuthExamplePage);
