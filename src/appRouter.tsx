import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./conponents/main";
import Event from "./conponents/event";
import Login from "./conponents/Auth/login";
import NavBar from "./navBar";

// REF: https://reacttraining.com/react-router/web/guides/quick-start

class AppRounter extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Route exact path="/" component={Main} />
        <Route path="/event/" component={Event} />
        <Route path="/login/" component={Login} />
      </Router>
    );
  }
}

export default AppRounter;
