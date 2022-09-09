import React from "react";
import Login from "./pages/login/index";
import history from "./history";
import CreateRequest from "./pages/request/create";
import { Router, Switch, Route } from "react-router-dom";
const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/create-request">
          <CreateRequest />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
