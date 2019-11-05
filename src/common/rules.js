import { isArray, isDefined } from "common/validators";

export const requiresArray = [isArray, "requires array"];

export const mustBeDefined = [isDefined, "required non-null and non-undefined"];
