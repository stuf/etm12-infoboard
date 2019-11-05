import * as V from "kefir.partial.lenses.validation";
import * as R from "kefir.ramda";
import * as J from "jsverify";

import * as Rule from "common/rules";

const rulePasses = rule => input => R.isNil(V.errors(rule, input));

describe("validator rules", () => {
  J.property(
    "requiresArray",
    J.array(J.oneof(J.string, J.number)),
    rulePasses(Rule.requiresArray)
  );

  J.property("mustBeDefined", J.string, rulePasses(Rule.mustBeDefined));
});
