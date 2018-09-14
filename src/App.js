import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import { BrowserRouter } from "react-router-dom";
import SocialApp from "./components/SocialApp";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <SocialApp />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
