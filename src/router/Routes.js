import React from "react";
import Preview from "../views/Preview";
import HomeLight from "../views/all-home-version/HomeLight";
import HomeDark from "../views/all-home-version/HomeDark";
import NotFound from "../views/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

const Routes = () => {
  return (
    <>
      <Router>
        <ScrollTopBehaviour />
        <Switch>
          <Route exact path="/" component={HomeDark} />
          <Route exact path="/home-light" component={HomeLight} />
          <Route exact path="/home-dark" component={HomeDark} />

          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
