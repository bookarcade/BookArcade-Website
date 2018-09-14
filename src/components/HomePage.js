import React, { Component } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";

export default class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      username: "admin",
      password: "admin",
      loggedIn: false
    };
  }
  onLogin = value => {
    if (
      value.userName === this.state.username &&
      value.password === this.state.password
    ) {
      this.setState({
        loggedIn: true
      });
    }
  };
  render() {
    return (
      <div>
        {!this.state.loggedIn ? <Login login={this.onLogin} /> : <Dashboard />}
      </div>
    );
  }
}
