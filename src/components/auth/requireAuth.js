import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export default function(ComposedComponent) {
  class Authentication extends Component {
    static contextTypes = {
      router: PropTypes.object
    };

    componentWillMount() {
      if (this.props.authenticated === null) {
        this.context.router.history.push("/");
      }
      console.log(this.props.authenticated);
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.context.router.history.push("/");
      }
    }

    render() {
      if (this.props.authenticated) {
        console.log("Hey");
        return <ComposedComponent {...this.props} />;
      }
      return null;
    }
  }

  function mapStateToProps(state) {
    console.log(state);
    return { authenticated: state.auth };
  }

  return connect(mapStateToProps)(Authentication);
}
