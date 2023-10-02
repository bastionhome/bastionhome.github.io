import { parseConfig, parseLink } from "./config-parser"

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

  "removes spaces around link text and URLs"() {
    const input = {
      menu: " Foo | https://foo.com "
    }
    const expected = {
      menu: [
        {
          text: "Foo",
          destination: "https://foo.com"
        }
      ],
      searchProviders: [],
      directory: [],
    }
    expect(parseConfig(input), equals, expected)
  },
})

test("parseLink", {
  "removes spaces around text and URL"() {
    const input = " Foo | https://foo.com "
    const expected = {
      text: "Foo",
      destination: "https://foo.com"
    }
    expect(parseLink(input), equals, expected)
  },

  "treats pipes after the first as literal"() {
    const input = "Foo|https://foo.com#|"
    const expected = {
      text: "Foo",
      destination: "https://foo.com#|"
    }
    expect(parseLink(input), equals, expected)
  },
})