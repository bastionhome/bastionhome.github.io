import {h} from "preact"
import {Podium} from "./views/Podium"
import {parseConfig} from "./data/config-parser"
import {config} from "./data/config"

export function Controller() {
  return (
    <Podium
      menu={parseConfig(config).menu}
      category={{
        title: "",
        entries: [
          {
            link: {
              destination: "https://npmjs.com",
              text: "NPM",
            },
          },
          {
            link: {
              destination: "https://developer.mozilla.com",
              text: "MDN",
            },
          },
          {link: {destination: "https://bun.sh", text: "Bun"}},
          {link: {destination: "https://deno.com", text: "Deno"}},
        ].map((entry) => entry.link),
      }}
    />
  )
}
