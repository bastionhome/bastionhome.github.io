import {h} from "preact"
import "./podium.less"
import { Category } from "./views/Category"

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
        <Category category={
          {
            title: "",
            entries: [
              {
                link: {
                  destination: "https://npmjs.com",
                  text: "NPM",
                }
              },
              {
                link: {
                  destination: "https://developer.mozilla.com",
                  text: "MDN",
                }
              },
              {link: {destination: "https://bun.sh", text: "Bun"}},
              {link: {destination: "https://deno.com", text: "Deno"}},
            ].map(entry => entry.link)
          }
        }/>
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
