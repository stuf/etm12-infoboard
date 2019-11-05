import * as R from "kefir.ramda";

export const isDefined = R.complement(R.isNil);
export const isArray = R.is(Array);
export const isString = R.is(String);
export const isNumber = R.is(Number);
