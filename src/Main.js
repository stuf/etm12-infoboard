import * as React from 'karet';
import * as U from 'karet.util';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { WithRootProps } from 'core/hoc';
import * as Scene from 'scenes';

export default function Main(props) {
  const { state, actions } = props;

  const pushEff = fn => U.doPush(actions, fn);

  return (
    <main className="appRoot">
      <>{U.sink(actions)}</>
      <Router>
        <Switch>
          <Route
            path="/board"
            component={WithRootProps(Scene.Board, { state, pushEff })}
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
