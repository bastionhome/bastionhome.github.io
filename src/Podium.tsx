import {h, Fragment} from "preact"
import "./podium.css"

export function Podium() {
  return <div class="podium">
    <form class="omnisearch">
      <input type="search" placeholder="Search" autoFocus={true} />
      <div class="search-providers">
        <button>MDN</button>
        <button>NPM</button>
      </div>
    </form>

    <article>
      <section>
        <h2>Software Development</h2>
        <ul>
          <li><a href="https://npmjs.com">NPM</a></li>
          <li><a href="https://developer.mozilla.com">MDN</a></li>
          <li><a href="https://bun.sh">Bun</a></li>
          <li><a href="https://deno.com">Deno</a></li>
        </ul>
      </section>
    </article>
  </div>
}