import * as React from "karet";
import { mount } from "enzyme";

import { WithRootProps } from "core/hoc";

describe("HOC", () => {
  it("passes on props", () => {
    const Component = props => <div />;

    const Wrapped = WithRootProps(Component, { foo: 1, bar: "a" });

    const wrapper = mount(<Wrapped />);
  });
});
