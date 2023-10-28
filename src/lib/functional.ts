export type UnderscoreFn = {
  <T>(x: T): T
  <T, A>(x: T, f1: (arg: T) => A): A
  <T, A, B>(x: T, f1: (arg: T) => A, f2: (arg: A) => B): B
  <T, A, B, C>(
    x: T,
    f1: (arg: T) => A,
    f2: (arg: A) => B,
    f3: (arg: B) => C,
  ): C
  <T, A, B, C, D>(
    x: T,
    f1: (arg: T) => A,
    f2: (arg: A) => B,
    f3: (arg: B) => C,
    f4: (arg: C) => D,
  ): D
}

export const _: UnderscoreFn = (x: any, ...fns: any[]) => {
  return fns.reduce((arg, f) => f(arg), x)
}

export function defaultToEmpty<T>(
  maybeNull: T[] | null | undefined,
): T[] {
  return maybeNull || []
}
