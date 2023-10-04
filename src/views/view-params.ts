export namespace ViewParams {
  export type Category = {
    title: string
    entries: Array<Link>
  }

  export type Link = {
    text: string
    destination: string
  }
}
