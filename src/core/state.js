import * as U from 'karet.util';
import * as V from 'kefir.partial.lenses.validation';

import { mustBeDefined, requiresArray } from 'common/rules';

const initialState = {
  items: [
    {
      id: '4ec868f0-00bc-11ea-8a75-bf599f3916ed',
      title: 'A title',
      body:
        'A body and then some\n\n# heading\n\nand some more text\n\n- [ ] foo\n- [x] bar',
      position: [10, 10],
      size: [200, 250],
      flags: {
        locked: false,
        editing: false,
      },
    },
    {
      id: '54258c60-00bc-11ea-8a75-bf599f3916ed',
      title: 'Another',
      body: 'Text goes here and it goes there',
      position: [400, 120],
      size: [300, 200],
      flags: {
        locked: false,
        editing: true,
      },
    },
    {
      id: '59d11df0-00bc-11ea-8a75-bf599f3916ed',
      title: 'Smol boi',
      body: 'hi',
      position: [200, 200],
      size: [150, 150],
      flags: {
        locked: true,
        editing: false,
      },
    },
    {
      id: 'c330dd70-0491-11ea-b203-93415e273b1a',
      title: 'empty boi',
      body: '',
      position: [420, 220],
      size: [150, 150],
      flags: {
        locked: false,
        editing: false,
      },
    },
  ],
};

export const createStore = (initial = initialState) => U.atom(initial);

export const validationRules = V.props({
  items: V.and(mustBeDefined, requiresArray),
});

export const validate = V.errors(validationRules);
