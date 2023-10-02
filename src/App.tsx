import {h} from "preact"
import "./app.css"
import {Podium} from "./Podium"
import { parseConfig } from "./data/config-parser"
import { config } from "./data/config"

export function App() {
  return (
    <div class="app">
      <div class="page">
        <div class="header">
          <h1>Bastion</h1>
        </div>
        <nav class="menu">
          {parseConfig(config).menu.map((link, i) => (<a href={link.destination} key={i}>{link.text}</a>))}
        </nav>
        <Podium />
      </div>
    </div>
  )
}
