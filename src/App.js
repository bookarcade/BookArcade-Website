import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import { BrowserRouter, Route } from "react-router-dom";
import SocialApp from "./components/SocialApp";
import ToDoList from "./components/ToDoList";
import { connect } from "react-redux";
import { fetchUser } from "./actions";
import SignIn from "./components/SignIn";
import requireAuth from "./components/auth/requireAuth";
import Login from "./components/Login";

class App extends Component {
  componentWillMount() {
    fetchUser();
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="container">
            <Route exact path="/" component={Login} />
            <Route path="/app" component={requireAuth(ToDoList)} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
