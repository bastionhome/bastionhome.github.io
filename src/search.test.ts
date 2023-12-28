import {entryMatches, search, webSearchUrl} from "./search"
import {MachineReadable} from "./data/config-types"
const {category} = MachineReadable

test("search", {
  "includes a category with an entry matching the query"() {
    const query = "example"
    const categories = [
      category({
        title: "One",
        entries: [
          {
            keywords: [],
            link: {
              text: "Example",
              destination: "https://example.com",
            },
          },
        ],
      }),
    ]

    expect(search(query, categories), equals, categories)
  },

  "excludes a category with no entries matching the query"() {
    const query = "asdf"
    const categories = [
      category({
        title: "One",
        entries: [
          {
            keywords: [],
            link: {
              text: "Example",
              destination: "https://example.com",
            },
          },
        ],
      }),
    ]

    expect(search(query, categories), equals, [])
  },

  "excludes entries that do not match the query"() {
    const query = "example"
    const categories = [
      category({
        title: "One",
        entries: [
          {
            keywords: [],
            link: {
              text: "Example",
              destination: "https://example.com",
            },
          },
          {
            keywords: [],
            link: {
              text: "foo",
              destination: "https://foo.com",
            },
          },
        ],
      }),
    ]

    const expected = [
      category({
        title: "One",
        entries: [
          {
            keywords: [],
            link: {
              text: "Example",
              destination: "https://example.com",
            },
          },
        ],
      }),
    ]

    expect(search(query, categories), equals, expected)
  },

  "excludes a subcategory with no entries matching the query"() {
    const query = "example"
    const categories = [
      category({
        title: "One",
        entries: [
          {
            keywords: [],
            link: {
              text: "Example",
              destination: "https://example.com",
            },
          },
        ],
        subCategories: [
          {
            title: "Does Not Match",
            entries: [
              {
                keywords: [],
                link: {
                  text: "Foo",
                  destination: "https://foo.com",
                },
              },
            ],
          },
        ],
      }),
    ]

    const expected = [
      category({
        title: "One",
        entries: [
          {
            keywords: [],
            link: {
              text: "Example",
              destination: "https://example.com",
            },
          },
        ],
        subCategories: [],
      }),
    ]

    expect(search(query, categories), equals, expected)
  },

  "includes a subcategory with an entry matching the query"() {
    const query = "example"
    const categories = [
      category({
        title: "One",
        entries: [],
        subCategories: [
          {
            title: "Sub",
            entries: [
              {
                keywords: [],
                link: {
                  text: "Example",
                  destination: "https://example.com",
                },
              },
            ],
          },
        ],
      }),
    ]

    expect(search(query, categories), equals, categories)
  },

  "filters subcategory entries to those matching the query"() {
    const query = "example"
    const categories = [
      category({
        title: "One",
        entries: [],
        subCategories: [
          {
            title: "Sub",
            entries: [
              {
                keywords: [],
                link: {
                  text: "This One Matches",
                  destination: "https://example.com",
                },
              },
              {
                keywords: [],
                link: {
                  text: "This One Does Not",
                  destination: "https://asdf.com",
                },
              },
            ],
          },
        ],
      }),
    ]

    const expected = [
      category({
        title: "One",
        entries: [],
        subCategories: [
          {
            title: "Sub",
            entries: [
              {
                keywords: [],
                link: {
                  text: "This One Matches",
                  destination: "https://example.com",
                },
              },
            ],
          },
        ],
      }),
    ]

    expect(search(query, categories), equals, expected)
  },
})

test("webSearchUrl", {
  "constructs a DuckDuckGo URL"() {
    const query = "hello"
    expect(
      webSearchUrl(query),
      is,
      "https://html.duckduckgo.com/html/?q=hello",
    )
  },

  "escapes spaces"() {
    const query = "hello world"
    expect(
      webSearchUrl(query),
      is,
      "https://html.duckduckgo.com/html/?q=hello%20world",
    )
  },
})

{
  const testEntry = {
    keywords: ["one", "two"],
    link: {
      text: "Link Text",
      destination: "https://example.com",
    },
  }

  test("entryMatches", {
    "is true when the query is empty"() {
      const query = ""
      expect(entryMatches(query, testEntry), is, true)
    },

    "is false when no part of the entry contains the query"() {
      const query = "blah"
      expect(entryMatches(query, testEntry), is, false)
    },

    "is false when no part of the entry contains a query word surrounded by whitespace"() {
      const query = "  blah  "
      expect(entryMatches(query, testEntry), is, false)
    },

    "is true when the entry's URL contains the query"() {
      const query = "exam"
      expect(entryMatches(query, testEntry), is, true)
    },

    "is true when the entry's URL contains the query, case-insensitively"() {
      const query = "EXAM"
      expect(entryMatches(query, testEntry), is, true)
    },

    "is true when the entry's URL contains all words of the query"() {
      const query = "ample exam"
      expect(entryMatches(query, testEntry), is, true)
    },

    "is true when the entry's title contains the query"() {
      const query = "Link"
      expect(entryMatches(query, testEntry), is, true)
    },

    "is true when the entry's title contains the query, case-insensitively"() {
      const query = "LINK"
      expect(entryMatches(query, testEntry), is, true)
    },

    "is true when some query words appear in the title and some in the URL"() {
      const query = "example link"
      expect(entryMatches(query, testEntry), is, true)
    },

    "is false when the query contains a word that does not appear in the entry"() {
      const query = "example link jfkdaljfskjf"
      expect(entryMatches(query, testEntry), is, false)
    },

    "is true when the query contains part of any keyword"() {
      const query = "one"
      expect(entryMatches(query, testEntry), is, true)
    },
  })
}
