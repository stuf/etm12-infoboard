import * as U from "karet.util";
import * as V from "kefir.partial.lenses.validation";

/**
 * Ensure that a core module adheres to a predefined
 * interface, enforcing it to provide validation rules for
 * itself.
 *
 * @param {string} name - Module name
 * @throws
 */
export const validateCoreModule = name => {
  const m = Object.assign({}, require(name));

  const rules = V.props({
    validate: [x => x, "required"],
    validationRules: [x => x, "required"]
  });

  const result = V.errors(rules, m);

  return result;
};
