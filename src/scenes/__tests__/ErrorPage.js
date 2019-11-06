import * as React from 'karet';
import * as U from 'karet.util';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import * as ErrorPage from 'scenes/ErrorPage';

describe('Error pages', () => {
  describe('NotFound', () => {
    it('matches snapshot', () => {
      const wrapper = mount(<ErrorPage.NotFound />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('InvalidState', () => {
    it('matches snapshot', () => {
      const wrapper = mount(<ErrorPage.InvalidState />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
