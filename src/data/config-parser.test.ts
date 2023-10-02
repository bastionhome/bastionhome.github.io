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

  "parses a menu item"() {
    const input = {
      menu: "Foo|https://foo.com"
    }
    const expected = {
      menu: [
        {
          text: "Foo",
          destination: "https://foo.com",
        },
      ],
      searchProviders: [],
      directory: [],
    }
    expect(parseConfig(input), equals, expected)
  },
})