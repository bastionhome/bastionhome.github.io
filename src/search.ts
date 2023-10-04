import { curry } from "@benchristel/taste";
import { MachineReadable } from "./data/config-types";

type Category = MachineReadable.Category

export function search(query: string, categories: Category[]): Category[] {
  return categories.filter(categoryMatches(query))
}

const categoryMatches = curry((query: string, category: Category): boolean => {
  return category.entries.some((entry) => entry.link.destination.includes(query))
}, "categoryMatches")