import React from "react";
import { Switch } from "react-router-dom";

import Login from "../modules/SignIn/pages/Login/Login";
import Main from "../modules/Main/pages/Main";
import Register from "../modules/SignUp/pages/Register/Register";

import Route from "./Route";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/SignUp" exact component={Register} />
      <Route path="/main" exact component={Main} isPrivate />
    </Switch>
  );
};

export default Routes;
