import React from "react";
import Login from "./pages/login/index";
import CreateRequest from "./pages/request/create";
import { PrivateRouter } from "./router/PrivateRouter";
import history from "./history";
import Category from "./pages/category/index";
import Department from "./pages/department";
import { Router, Switch, Route } from "react-router-dom";
const App = () => {
  return (
    <Router history={history}>
        <Switch>
        <Route path="/login">
            <Login />
          </Route>
          <PrivateRouter path="/create-request">
            <CreateRequest />
          </PrivateRouter>
          <PrivateRouter path="/category">
            <Category />
          </PrivateRouter>
          <PrivateRouter path="/department">
            <Department />
          </PrivateRouter>
        </Switch>
    </Router>
  );
};

export default App;
