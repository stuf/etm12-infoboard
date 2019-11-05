import * as React from "karet";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import * as Scene from "scenes";

// import { WithRootProps } from 'core/hoc';

export default function Main(props) {
  return (
    <main>
      <Router>
        <Switch>
          <Route path="/board" component={Scene.Board} />
          <Route path="/" component={Scene.Splash} />
          <Route component={Scene.ErrorPage.NotFound} />
        </Switch>
      </Router>
    </main>
  );
}
