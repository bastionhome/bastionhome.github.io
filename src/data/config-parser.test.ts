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

  "parses multiple menu items"() {
    const input = {
      menu: "One|https://one.com\nTwo|https://two.com"
    }
    const expected = {
      menu: [
        {
          text: "One",
          destination: "https://one.com",
        },
        {
          text: "Two",
          destination: "https://two.com",
        },
      ],
      searchProviders: [],
      directory: [],
    }
    expect(parseConfig(input), equals, expected)
  },

  "ignores blank lines"() {
    const input = {
      menu: "\n"
    }
    const expected = {
      menu: [],
      searchProviders: [],
      directory: [],
    }
    expect(parseConfig(input), equals, expected)
  },

  "ignores all-whitespace menu items"() {
    const input = {
      menu: " \n\t"
    }
    const expected = {
      menu: [],
      searchProviders: [],
      directory: [],
    }
    expect(parseConfig(input), equals, expected)
  },
})