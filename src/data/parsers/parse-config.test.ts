import {curry} from "@benchristel/taste"
import {
  parseConfig,
  parseEntry,
  parseKeywords,
  parseLink,
} from "./parse-config"
import {HumanWritable, MachineReadable} from "../config-types"

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

  "distributes keywords from a subcategory to each entry"() {
    const input: HumanWritable.Config = {
      categories: [
        {
          title: "A Category",
          subCategories: [
            {
              title: "A Subcategory",
              keywords: "one two",
              entries: `
                https://foo.com
                https://example.com
              `,
            },
          ],
        },
      ],
    }

    const expected: Array<MachineReadable.Entry> = [
      {
        link: which(isAnything),
        keywords: ["one", "two"],
      },
      {
        link: which(isAnything),
        keywords: ["one", "two"],
      },
    ]

    expect(
      parseConfig(input).categories[0].subCategories[0].entries,
      equals,
      expected,
    )
  },

  "preserves each entry's own keywords when adding category keywords"() {
    const input: HumanWritable.Config = {
      categories: [
        {
          title: "A Category",
          subCategories: [
            {
              title: "A Subcategory",
              keywords: "one two",
              entries: `
                https://example.com keyword-from-entry
              `,
            },
          ],
        },
      ],
    }

    const expected: Array<MachineReadable.Entry> = [
      {
        link: which(isAnything),
        keywords: which(
          isSameSetAs(["one", "two", "keyword-from-entry"]),
        ),
      },
    ]

    expect(
      parseConfig(input).categories[0].subCategories[0].entries,
      equals,
      expected,
    )
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

test("parseKeywords", {
  "parses empty string to empty array"() {
    expect(parseKeywords(""), equals, [])
  },

  "parses undefined to empty array"() {
    expect(parseKeywords(undefined), equals, [])
  },

  "parses whitespace to empty array"() {
    expect(parseKeywords(" "), equals, [])
  },

  "parses one keyword"() {
    expect(parseKeywords("word"), equals, ["word"])
  },

  "parses multiple keywords"() {
    expect(parseKeywords("three word set"), equals, [
      "three",
      "word",
      "set",
    ])
  },

  "ignores extra space between words"() {
    expect(parseKeywords("one   two"), equals, ["one", "two"])
  },

  "ignores space around the keywords"() {
    expect(parseKeywords("  word  "), equals, ["word"])
  },

  "treats all whitespace the same"() {
    expect(parseKeywords("foo\n\tbar"), equals, ["foo", "bar"])
  },
})

function isAnything() {
  return true
}

const isSameSetAs = curry(
  (expected: Array<any>, actual: Array<any>) => {
    return equals(new Set(expected), new Set(actual))
  },
  "isSameSetAs",
)
