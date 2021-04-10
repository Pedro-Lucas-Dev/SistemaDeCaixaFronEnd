import React from "react";
import { Switch } from "react-router-dom";

import Login from "../modules/SignIn/pages/Login";
import Main from "../modules/Main/pages/Main";

import Route from "./Route";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/main" exact component={Main} isPrivate />
    </Switch>
  );
};

export default Routes;
