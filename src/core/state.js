import * as U from 'karet.util';
import * as V from 'kefir.partial.lenses.validation';

import { mustBeDefined, requiresArray } from 'common/rules';

const initialState = {
  items: [
    {
      title: 'A title',
      body: 'A body and then some\n\n# heading\n\nand some more text',
      position: [10, 10],
      size: [200, 250],
      flags: {
        locked: false,
        editing: false,
      },
    },
    {
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
      title: 'Smol boi',
      body: 'hi',
      position: [200, 200],
      size: [150, 150],
      flags: {
        locked: true,
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
