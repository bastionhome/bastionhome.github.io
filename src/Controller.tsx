import {h, Fragment} from "preact"
import "./app.css"
import {Podium} from "./Podium"
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
      <Podium />
    </>
  )
}
