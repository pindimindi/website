import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import ActionForm from "./ActionForm";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/actionForm" component={ActionForm} />
    </Switch>
  );
};

export default Routes;
