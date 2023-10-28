import {test, expect, equals} from "@benchristel/taste"
import {map, flatMap} from "./arrays"

test("map", {
  "returns empty given empty"() {
    const id = <T>(x: T) => x
    expect(map(id)([]), equals, [])
  },

  "upgrades a function that operates on scalars to operate on arrays"() {
    const inc = (x: number) => x + 1
    expect(map(inc)([1, 2, 3]), equals, [2, 3, 4])
  },
})

test("flatMap", {
  "returns empty given empty"() {
    const wrapInArray = <T>(x: T) => [x]
    expect(flatMap(wrapInArray)([]), equals, [])
  },

  "upgrades a function that takes a scalar and returns an array to take an array"() {
    const pairWithNegative = (x: number) => [x, -x]
    expect(
      flatMap(pairWithNegative)([1, 2, 3]),
      equals,
      [1, -1, 2, -2, 3, -3],
    )
  },
})
