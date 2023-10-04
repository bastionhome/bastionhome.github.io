import { search } from "./search"
import { MachineReadable } from "./data/config-types"
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
            }
          }
        ],
      })
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
            }
          }
        ],
      })
    ]

    expect(search(query, categories), equals, [])
  },
})