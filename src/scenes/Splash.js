import * as React from "karet";
import * as U from "karet.util";

export default function Index(props) {
  return (
    <section>
      Index page
      <pre>
        <code>{U.stringify(props, null, 2)}</code>
      </pre>
    </section>
  );
}
