import {parseConfig, parseEntry, parseLink} from "./config-parser"
import {HumanWritable, MachineReadable} from "./config-types"

test("parseConfig().menu", {
  "returns empty given empty"() {
    const input = {}
    const expected = [] as const
    expect(parseConfig(input).menu, equals, expected)
  },

  "parses a menu item"() {
    const input = {
      menu: "Foo|https://foo.com",
    }
    const expected = [
      {
        text: "Foo",
        destination: "https://foo.com",
      },
    ]
    expect(parseConfig(input).menu, equals, expected)
  },

  "parses multiple menu items"() {
    const input = {
      menu: "One|https://one.com\nTwo|https://two.com",
    }
    const expected = [
      {
        text: "One",
        destination: "https://one.com",
      },
      {
        text: "Two",
        destination: "https://two.com",
      },
    ]
    expect(parseConfig(input).menu, equals, expected)
  },

  "ignores blank lines"() {
    const input = {
      menu: "\n",
    }
    const expected = [] as const
    expect(parseConfig(input).menu, equals, expected)
  },

  "ignores all-whitespace menu items"() {
    const input = {
      menu: " \n\t",
    }
    const expected = [] as const
    expect(parseConfig(input).menu, equals, expected)
  },

  "removes spaces around link text and URLs"() {
    const input = {
      menu: " Foo | https://foo.com ",
    }
    const expected = [
      {
        text: "Foo",
        destination: "https://foo.com",
      },
    ]
    expect(parseConfig(input).menu, equals, expected)
  },
})

test("parseConfig().directory", {
  "returns empty given empty"() {
    const input: HumanWritable.Config = {}
    const expected = [] as Array<MachineReadable.Category>
    expect(parseConfig(input).directory, equals, expected)
  },

  "returns a category with a single link"() {
    const input: HumanWritable.Config = {
      directory: [
        {
          title: "A Category",
          entries: `
            Link Text | https://example.com
          `,
        },
      ],
    }

    const expected: Array<MachineReadable.Category> = [
      {
        title: "A Category",
        entries: [
          {
            keywords: [],
            link: {
              text: "Link Text",
              destination: "https://example.com",
            },
          },
        ],
      },
    ]

    expect(parseConfig(input).directory, equals, expected)
  },
})

test("parseLink", {
  "removes spaces around text and URL"() {
    const input = " Foo | https://foo.com "
    const expected = {
      text: "Foo",
      destination: "https://foo.com",
    }
    expect(parseLink(input), equals, expected)
  },

  "treats pipes after the first as literal"() {
    const input = "Foo|https://foo.com#|"
    const expected = {
      text: "Foo",
      destination: "https://foo.com#|",
    }
    expect(parseLink(input), equals, expected)
  },

  "puts unparseable garbage in the title, and defaults the destination to #"() {
    const input = "asdf"
    const expected = {
      text: "asdf",
      destination: "#",
    }
    expect(parseLink(input), equals, expected)
  },
})

test("parseEntry", {
  "parses a link with no keywords"() {
    const input = "Title | https://example.com"
    const expected = {
      keywords: [],
      link: {
        text: "Title",
        destination: "https://example.com",
      },
    }
    expect(parseEntry(input), equals, expected)
  },

  "parses keywords"() {
    const input = "Title | https://example.com foo bar baz"
    const expected = ["foo", "bar", "baz"]
    expect(parseEntry(input).keywords, equals, expected)
  },

  "allows multiple spaces between keywords"() {
    const input = "Title | https://example.com  foo  bar"
    const expected = ["foo", "bar"]
    expect(parseEntry(input).keywords, equals, expected)
  },

  "allows tabs between keywords"() {
    const input = "Title | https://example.com\tfoo\tbar"
    const expected = ["foo", "bar"]
    expect(parseEntry(input).keywords, equals, expected)
  },
})
