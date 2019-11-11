import * as React from 'karet';
import { mount } from 'enzyme';

import Markdown from 'components/common/Markdown';
import marked from 'marked';

it('inserts parsed markdown as its children', () => {
  const md = '- foo\n-bar\n\n# Heading';

  const wrapper = mount(<Markdown>{md}</Markdown>);
  const content = wrapper.find('.markdown__content');

  expect(content.html()).toContain(marked(md));
});
