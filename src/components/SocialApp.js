import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";

export default class SocialApp extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    );
  }
}
