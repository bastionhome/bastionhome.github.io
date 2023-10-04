import {curry} from "@benchristel/taste"
import {MachineReadable} from "./data/config-types"

type Category = MachineReadable.Category
type Entry = MachineReadable.Entry

export function search(
  query: string,
  categories: Category[],
): Category[] {
  return categories.filter(categoryMatches(query))
}

const categoryMatches = curry(
  (query: string, category: Category): boolean =>
    category.entries.some(entryMatches(query)),
  "categoryMatches",
)

export const entryMatches = curry(
  (query: string, entry: Entry): boolean =>
    lowercaseWords(query).every(
      (word) =>
        entry.link.destination.toLowerCase().includes(word) ||
        entry.link.text.toLowerCase().includes(word),
    ),
  "entryMatches",
)

function lowercaseWords(s: string): string[] {
  return s.toLowerCase().split(/\s+/)
}
