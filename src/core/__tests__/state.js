import { createStore, validate } from "core/state";
import { Property } from "kefir";

import { validateCoreModule } from "dev/test-utils";

const __NAME = "core/state";

describe("state", () => {
  it("is a well-defined module", () => {
    expect(() => validateCoreModule(__NAME)).not.toThrow();
  });

  describe("createStore", () => {
    it("defines validation rules", () => {
      const x = validateCoreModule(__NAME);
    });

    it("defines a validator", () => {
      expect(validate).toBeDefined();
      expect(validate).toBeInstanceOf(Function);
    });

    it("creates a state/store atom", () => {
      const state = createStore({ items: [] });
      expect(state.get()).toBeDefined();
      expect(state).toBeInstanceOf(Property);
    });
  });
});
