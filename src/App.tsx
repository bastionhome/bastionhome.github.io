import {h} from "preact"
import "./app.css"
import {Podium} from "./Podium"

export function App() {
  return (
    <div class="app">
      <div class="page">
        <div class="header">
          <h1>Bastion</h1>
        </div>
        <nav class="menu">
          <a href="https://benchristel.github.io/tv">TV</a>
          <a href="https://benchristel.github.io/recipes">Recipes</a>
          <a href="https://github.com/benchristel/benchristel.github.io/wiki">
            Bliki
          </a>
          <a href="https://mail.google.com">Gmail</a>
          <a href="https://benchristel.github.io/call">Call</a>
        </nav>
        <Podium />
      </div>
    </div>
  )
}
