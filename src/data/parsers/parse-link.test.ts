import {parseLink} from "./parse-link"

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
