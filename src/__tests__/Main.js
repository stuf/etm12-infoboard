import * as React from 'karet';
import { mount } from 'enzyme';

import Main from 'Main';

describe('Main', () => {
  it('should work with some default state', () => {
    const wrapper = mount(<Main />);
  });
});
