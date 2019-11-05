import * as React from "karet";
import { mount } from "enzyme";

import Main from "Main";

describe("Main", () => {
  it("should work with some default state", () => {
    const wrapper = mount(<Main />);
  });

  it.skip("should display error message if default state is not valid", () => {
    const wrapper = mount(<Main />);
  });

  it.skip("should display a '' error when page doesn't exist", () => {
    const wrapper = mount(<Main />);
  });
});
