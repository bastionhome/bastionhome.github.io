import {parseEntry} from "./parse-entry"

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
