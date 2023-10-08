import {parseKeywords} from "./parse-keywords"

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
