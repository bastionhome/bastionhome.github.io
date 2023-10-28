export function map<I, O>(fn: (x: I) => O): (xs: I[]) => O[] {
  return (xs) => xs.map(fn)
}

export function flatMap<I, O>(fn: (x: I) => O[]): (xs: I[]) => O[] {
  return (xs) => xs.map(fn).reduce(concat, [])
}

export function sortUnique(unsorted: string[]): string[] {
  const sorted = [...unsorted].sort()
  return sorted.filter((s, i) => s !== sorted[i - 1])
}

function concat<T>(a1: T[], a2: T[]): T[] {
  return a1.concat(a2)
}
