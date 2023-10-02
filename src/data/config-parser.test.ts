import { parseConfig } from "./config-parser"

test("parseConfig", {
  "returns empty given empty"() {
    const input = {}
    const expected = {
      menu: [],
      searchProviders: [],
      directory: [],
    }
    expect(parseConfig(input), equals, expected)
  },
})