import * as React from 'karet';
import { mount } from 'enzyme';

import { mkRandomItem } from 'test/model';
import Card from 'components/Card';

describe('Card', () => {
  it('throws if given invalid data', () => {
    expect(() => Card()).toThrow();
  });

  it('renders a card with data', () => {
    const item = mkRandomItem();
    const wrapper = mount(<Card item={item} />);

    // expect(wrapper.find('.cardHeader').text()).toBe(item.title);
    // expect(wrapper.find('.cardBody').text()).toBe(item.body);
  });
});
