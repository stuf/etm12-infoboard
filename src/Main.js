import * as React from 'karet';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { WithRootProps } from 'core/hoc';
import * as Scene from 'scenes';

export default function Main(props) {
  const { state } = props;

  return (
    <main className="appRoot">
      <Router>
        <Switch>
          <Route
            path="/board"
            component={WithRootProps(Scene.Board, { state })}
          />
          <Route
            path="/error/state"
            component={WithRootProps(Scene.ErrorPage.InvalidState, { state })}
          />
          <Route path="/" component={Scene.Splash} />
          <Route component={Scene.ErrorPage.NotFound} />
        </Switch>
      </Router>
    </main>
  );
}
