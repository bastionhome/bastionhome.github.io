import {h} from "preact"
import "./page.css"
import { App } from "./App"

export function Page() {
  return <div class="page">
    <div class="splash">
      <h1>Bastion</h1>
    </div>
    <nav class="menu">
      <a href="https://benchristel.github.io/tv">TV</a>
      <a href="https://benchristel.github.io/recipes">Recipes</a>
      <a href="https://github.com/benchristel/benchristel.github.io/wiki">Bliki</a>
      <a href="https://mail.google.com">Gmail</a>
      <a href="https://benchristel.github.io/call">Call</a>
    </nav>
    <App />
  </div>
}
