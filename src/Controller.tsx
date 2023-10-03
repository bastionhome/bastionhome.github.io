import {h, Fragment} from "preact"
import "./app.css"
import {Podium} from "./views/Podium"
import {parseConfig} from "./data/config-parser"
import {config} from "./data/config"

export function Controller() {
  return (
    <>
      <nav class="menu">
        {parseConfig(config).menu.map((link, i) => (
          <a href={link.destination} key={i}>
            {link.text}
          </a>
        ))}
      </nav>
      <Podium
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
    </>
  )
}
