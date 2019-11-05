import * as VFn from "common/validators";
import * as J from "jsverify";

describe("common validators", () => {
  J.property("isDefined", J.oneof([J.nat, J.string, J.bool]), VFn.isDefined);
  J.property("isArray", J.oneof(J.array(J.nat, J.nearray(J.nat))), VFn.isArray);
  J.property("isString", J.string, VFn.isString);
  J.property("isNumber", J.nat, VFn.isNumber);
});
