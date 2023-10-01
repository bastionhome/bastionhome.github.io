import {h, Fragment} from "preact"
import "./podium.css"

export function Podium() {
  return (
    <div class="podium">
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
            <li>
              <a href="https://npmjs.com">NPM</a>
            </li>
            <li>
              <a href="https://developer.mozilla.com">MDN</a>
            </li>
            <li>
              <a href="https://bun.sh">Bun</a>
            </li>
            <li>
              <a href="https://deno.com">Deno</a>
            </li>
          </ul>
        </section>
      </article>
      <footer>
        <hr />
        <p>
          Bastion is maintained by{" "}
          <a href="https://github.com/benchristel">Ben Christel</a>.
        </p>

        <p>
          The image that appears at the top of each page is{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.flickr.com/photos/23730371@N05/49396214307"
          >
            619 | Elizabeth Terry | Untitled Double Landscape |
            Watercolor | 20x22.25
          </a>
          " by{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.flickr.com/photos/23730371@N05"
          >
            theartleaguegallery
          </a>
          , and is marked with{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://creativecommons.org/publicdomain/mark/1.0/?ref=openverse"
          >
            Public Domain Mark 1.0{" "}
            <img
              src="https://mirrors.creativecommons.org/presskit/icons/pd.svg"
              style="height: 1em; margin-right: 0.125em; display: inline;"
            ></img>
          </a>
          .
        </p>

        <p>
          Theme inspired by{" "}
          <a href="https://www.palemoon.org/">
            The Pale Moon Browser
          </a>
          .
        </p>
      </footer>
    </div>
  )
}
