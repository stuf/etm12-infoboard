import * as React from "karet";

export function WithRootProps(Component, extraProps = {}) {
  return ps => <Component {...{ ...extraProps, ...ps }} />;
}
