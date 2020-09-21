import * as React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

const Routes = props =>
  <Router>
    <Switch>
      <Route path="/about" component={Arthemetic} />
      <Route path="/dashboard" component={Simple} />
    </Switch>
  </Router>


export default Routes