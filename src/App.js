import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Menu from "./components/Menu";
import Home from "./views/Home";
import SendMessage from "./views/SendMessage";
import SendBulk from "./views/SendBulk";
import Appointments from "./views/Appointments";
class App extends Component {
  render() {
    return (
      <Router>
        <Menu />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/send-single" exact component={SendMessage} />
          <Route path="/send-bulk" exact component={SendBulk} />
          <Route path="/view-appointments" exact component={Appointments} />
        </Switch>
      </Router>
    );
  }
}

export default App;
