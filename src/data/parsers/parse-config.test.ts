import {curry} from "@benchristel/taste"
import {parseConfig} from "./parse-config"
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

test("parseConfig().searchProviders", {
  "returns empty given empty"() {
    const input: HumanWritable.Config = {
      searchProviders: "",
    }

    const expected: MachineReadable.SearchProvider[] = []

    expect(parseConfig(input).searchProviders, equals, expected)
  },

  "parses one search provider"() {
    const input: HumanWritable.Config = {
      searchProviders: `
        DuckDuckGo | https://duckduckgo.com?q=%s
      `,
    }

    const expected: MachineReadable.SearchProvider[] = [
      {
        name: "DuckDuckGo",
        searchUrlFormat: "https://duckduckgo.com?q=%s",
      },
    ]

    expect(parseConfig(input).searchProviders, equals, expected)
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
          title: "",
          entries: `
            Link Text | https://example.com
          `,
        },
      ],
    }

    const expected: Array<MachineReadable.Category> = [
      objectContaining({
        entries: [
          objectContaining({
            link: {
              text: "Link Text",
              destination: "https://example.com",
            },
          }),
        ],
      }),
    ]

    expect(parseConfig(input).categories, equals, expected)
  },

  "parses a subcategory"() {
    const input: HumanWritable.Config = {
      categories: [
        {
          title: "",
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
      objectContaining({
        subCategories: [
          {
            title: "A Subcategory",
            entries: [],
          },
        ],
      }),
    ]

    expect(parseConfig(input).categories, equals, expected)
  },

  "distributes keywords from a category to each entry"() {
    const input: HumanWritable.Config = {
      categories: [
        {
          title: "",
          keywords: "one two",
          entries: `
            https://foo.com
            https://example.com
          `,
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

    expect(parseConfig(input).categories[0].entries, equals, expected)
  },

  "distributes keywords from a category to subcategory entries"() {
    const input: HumanWritable.Config = {
      categories: [
        {
          title: "",
          keywords: "one two",
          subCategories: [
            {title: "", entries: "https://foo.com"},
            {title: "", entries: "https://example.com"},
          ],
        },
      ],
    }

    const expected: MachineReadable.Entry[][] = [
      [
        {
          link: which(isAnything),
          keywords: ["one", "two"],
        },
      ],
      [
        {
          link: which(isAnything),
          keywords: ["one", "two"],
        },
      ],
    ]

    expect(
      parseConfig(input).categories[0].subCategories.map(
        (sc) => sc.entries,
      ),
      equals,
      expected,
    )
  },

  "distributes keywords from a subcategory to each entry"() {
    const input: HumanWritable.Config = {
      categories: [
        {
          title: "",
          subCategories: [
            {
              title: "",
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
          title: "",
          subCategories: [
            {
              title: "",
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

test("parseConfig().leechblockAllowPatterns", {
  "defaults to empty"() {
    const input = {}
    const expected = [] as string[]
    expect(
      parseConfig(input).leechblockAllowPatterns,
      equals,
      expected,
    )
  },

  "includes a custom pattern"() {
    const input: HumanWritable.Config = {
      customLeechblockAllowPatterns: "foo",
    }
    const expected = ["foo"]
    expect(
      parseConfig(input).leechblockAllowPatterns,
      equals,
      expected,
    )
  },

  "includes multiple space-separated patterns"() {
    const input: HumanWritable.Config = {
      customLeechblockAllowPatterns: "bar baz foo",
    }
    const expected = ["bar", "baz", "foo"]
    expect(
      parseConfig(input).leechblockAllowPatterns,
      equals,
      expected,
    )
  },

  "allows multiple spaces as separator"() {
    const input: HumanWritable.Config = {
      customLeechblockAllowPatterns: "bar   foo",
    }
    const expected = ["bar", "foo"]
    expect(
      parseConfig(input).leechblockAllowPatterns,
      equals,
      expected,
    )
  },

  "allows other whitespace as separator"() {
    const input: HumanWritable.Config = {
      customLeechblockAllowPatterns: "bar\n\t   foo",
    }
    const expected = ["bar", "foo"]
    expect(
      parseConfig(input).leechblockAllowPatterns,
      equals,
      expected,
    )
  },

  "ignores leading and trailing space in custom patterns"() {
    const input: HumanWritable.Config = {
      customLeechblockAllowPatterns: "  foo  ",
    }
    const expected = ["foo"]
    expect(
      parseConfig(input).leechblockAllowPatterns,
      equals,
      expected,
    )
  },

  "includes a linked-to domain from a top-level category"() {
    const input: HumanWritable.Config = {
      categories: [
        {
          title: "Programming",
          entries: `
            https://example.com
          `,
        },
      ],
    }
    const expected = "example.com"
    expect(
      parseConfig(input).leechblockAllowPatterns,
      includes,
      expected,
    )
  },

  "includes a linked-to domain from a subcategory"() {
    const input: HumanWritable.Config = {
      categories: [
        {
          title: "Programming",
          subCategories: [
            {
              title: "Lisp",
              entries: `
                http://dreamsongs.com
              `,
            },
          ],
        },
      ],
    }
    const expected = "dreamsongs.com"
    expect(
      parseConfig(input).leechblockAllowPatterns,
      includes,
      expected,
    )
  },

  "includes the domains of search providers"() {
    const input: HumanWritable.Config = {
      searchProviders: `
        https://search.me?q=%s
      `,
    }
    const expected = "search.me"
    expect(
      parseConfig(input).leechblockAllowPatterns,
      includes,
      expected,
    )
  },

  "includes a linked-to domain from the menu"() {
    const input: HumanWritable.Config = {
      menu: `
        https://benchristel.github.io
      `,
    }
    const expected = ["benchristel.github.io"]
    expect(
      parseConfig(input).leechblockAllowPatterns,
      equals,
      expected,
    )
  },

  "sorts and deduplicates patterns"() {
    const input: HumanWritable.Config = {
      menu: `
        foo
        bar
        dupe
      `,
      customLeechblockAllowPatterns: `
        quux
        kludge
        dupe
      `,
    }
    const expected = ["bar", "dupe", "foo", "kludge", "quux"]
    expect(
      parseConfig(input).leechblockAllowPatterns,
      equals,
      expected,
    )
  },

  "includes wildcards matching subdomains of listed primary domains"() {
    const input: HumanWritable.Config = {
      customLeechblockAllowPatterns: `
        foo.com
      `,
    }
    const expected = ["*.foo.com", "foo.com"]
    expect(
      parseConfig(input).leechblockAllowPatterns,
      equals,
      expected,
    )
  },

  "does not include wildcards for subdomains of subdomains"() {
    const input: HumanWritable.Config = {
      customLeechblockAllowPatterns: `
        user.untrusted.com
      `,
    }
    const expected = ["user.untrusted.com"]
    expect(
      parseConfig(input).leechblockAllowPatterns,
      equals,
      expected,
    )
  },

  "does not add stars to existing wildcards"() {
    const input: HumanWritable.Config = {
      customLeechblockAllowPatterns: `
        *.foo.com
      `,
    }
    const expected = ["*.foo.com"]
    expect(
      parseConfig(input).leechblockAllowPatterns,
      equals,
      expected,
    )
  },

  "does not generate subdomain wildcards for URLs with paths"() {
    const input: HumanWritable.Config = {
      customLeechblockAllowPatterns: `
        foo.com/some/page
      `,
    }
    const expected = ["foo.com/some/page"]
    expect(
      parseConfig(input).leechblockAllowPatterns,
      equals,
      expected,
    )
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

function objectContaining(expected: any) {
  return which(hasProperties(expected))
}

const hasProperties = curry((expected: any, actual: any) => {
  for (let k in expected) {
    if (!(k in actual)) {
      return false
    }
    if (!equals(expected[k], actual[k])) {
      return false
    }
  }
  return true
}, "hasProperties")

function includes<T>(needle: T, haystack: T[]): boolean {
  return haystack.includes(needle)
}
