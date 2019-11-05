import * as U from "karet.util";
import * as V from "kefir.partial.lenses.validation";

import { mustBeDefined, requiresArray } from "common/rules";

const initialState = {
  items: [
    {
      title: "A title",
      body: "A body and then some\n\n# heading\n\nand some more text",
      position: [10, 10]
    }
  ]
};

export const createStore = (initial = initialState) => U.atom(initial);

export const validationRules = V.props({
  items: V.and(mustBeDefined, requiresArray)
});

export const validate = V.errors(validationRules);
