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

test("parseConfig().categories", {
  "returns empty given empty"() {
    const input: HumanWritable.Config = {}
    const expected = [] as Array<MachineReadable.Category>
    expect(parseConfig(input).categories, equals, expected)
  },

  "returns a category with a single link"() {
    const input: HumanWritable.Config = {
      categories: [
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
        subCategories: [],
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

    expect(parseConfig(input).categories, equals, expected)
  },

  "parses a subcategory"() {
    const input: HumanWritable.Config = {
      categories: [
        {
          title: "A Category",
          subCategories: [
            {
              title: "A Subcategory",
              entries: "",
            },
          ],
        },
      ],
    }

    const expected: MachineReadable.Config["categories"] = [
      {
        title: "A Category",
        entries: [],
        subCategories: [
          {
            title: "A Subcategory",
            entries: [],
          },
        ],
      },
    ]

    expect(parseConfig(input).categories, equals, expected)
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

  "parses links without an alias"() {
    const input = "https://example.com"
    const expected = {
      text: "example.com",
      destination: "https://example.com",
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

  "parses entries with keywords and no alias"() {
    const input = "https://example.com keyword1 keyword2"
    const expected = {
      keywords: ["keyword1", "keyword2"],
      link: {
        text: "example.com",
        destination: "https://example.com",
      },
    }
    expect(parseEntry(input), equals, expected)
  },
})
