import * as React from "karet";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import { WithRootProps } from 'core/hoc';

export default function Main(props) {
  return (
    <main>
      <Router>
        <Switch>
          <Route path="/app" render={() => <div>app</div>} />
          <Route
            render={() => (
              <div>
                <h1>Not found :(</h1>
              </div>
            )}
          />
        </Switch>
      </Router>
    </main>
  );
}
