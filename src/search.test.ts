import {entryMatches, search} from "./search"
import {MachineReadable} from "./data/config-types"
const {category} = MachineReadable

test("search", {
  "includes a category with an entry matching the search term"() {
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

  "excludes a category with no entries matching the search term"() {
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

    "is true when the entry's URL contains the query"() {
      const query = "exam"
      expect(entryMatches(query, testEntry), is, true)
    },

    "is true when the entry's URL contains all words of the query"() {
      const query = "ample exam"
      expect(entryMatches(query, testEntry), is, true)
    },
  })
}
