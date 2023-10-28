import {test, expect, is} from "@benchristel/taste"
import {_} from "./functional"

test("_", {
  "returns a lone argument"() {
    expect(_(1), is, 1)
  },

  "returns the type of a lone argument"() {
    // @ts-expect-error
    const __: string = _(1)
  },

  "passes its first argument to the given function"() {
    const inc = (x: number) => x + 1
    expect(_(1, inc), is, 2)
  },

  "returns the return type of the function arg"() {
    // @ts-expect-error
    const __: string = _("a", parseInt)
  },

  "checks that its first arg can be passed to the function arg"() {
    const trim = (s: string) => s.trim()
    ;() => {
      // @ts-expect-error
      const __: string = _(1, trim)
    }
  },
})
