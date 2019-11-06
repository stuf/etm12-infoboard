import * as React from 'karet';
import * as U from 'karet.util';

export function NotFound(props) {
  return <section>Not found :(((</section>;
}

export function InvalidState(props) {
  const { state } = props;

  return (
    <section>
      <h1>Oh no!</h1>

      <h2>Invalid state data</h2>

      <p>
        It seems as the state the application is in is not valid. It's
        currently:
      </p>

      <pre>
        <code>{U.stringify(state, null, 2)}</code>
      </pre>
    </section>
  );
}
