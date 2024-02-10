import {declutter} from "./urls"

test("declutter", {
  "removes the scheme from an http URL"() {
    expect(declutter("http://example.com"), is, "example.com")
  },

  "removes the scheme from an https URL"() {
    expect(declutter("https://example.com"), is, "example.com")
  },

  "removes a www subdomain"() {
    expect(declutter("www.example.com"), is, "example.com")
  },

  "removes a trailing slash"() {
    expect(declutter("example.com/en/"), is, "example.com/en")
  },
})
