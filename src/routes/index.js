import React from "react";
import { Switch } from "react-router-dom";

import Login from "../modules/SignIn/pages/Login/Login";
import Main from "../modules/Main/pages/Main";
import Register from "../modules/SignUp/pages/Register/Register";

import Route from "./Route";
import { RegisterCategory } from "../modules/Category/pages/RegisterCategory";
import { ListCategory } from "../modules/Category/pages/ListCategory";
import { EditCategory } from "../modules/Category/pages/EditCategory";
import { AddProducts } from "../modules/Products/pages/AddProducts";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/sign-up" exact component={Register} />
      <Route path="/main" exact component={Main} isPrivate />
      <Route
        path="/register-category"
        exact
        component={RegisterCategory}
        isPrivate
      />
      <Route path="/categories" exact component={ListCategory} isPrivate />
      <Route
        path="/edit-category/:id"
        exact
        component={EditCategory}
        isPrivate
      />
      <Route path="/add-product" exact component={AddProducts} isPrivate />
    </Switch>
  );
};

export default Routes;
