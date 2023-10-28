import {h, Fragment, ComponentChildren} from "preact"
import {useEffect, useRef, useState} from "preact/hooks"
import "./MainView.less"
import {Category} from "./Category"
import {ViewParams} from "./view-params"
import {DevInfoPane, DevInfoPaneOpener} from "./DevInfoPane"

type Props = {
  config: ViewParams.Config
  query: string
  onQuery: (value: string) => unknown
  onSearchSubmitted: (providerIndex: number) => unknown
}

export function MainView(props: Props) {
  const {config, query, onQuery, onSearchSubmitted} = props
  return (
    <>
      <nav class="menu">
        {config.menu.map((link, i) => (
          <a href={link.destination} key={i}>
            {link.text}
          </a>
        ))}
      </nav>
      <div class="podium">
        <div class="omnisearch">
          <input
            type="search"
            placeholder="Search"
            autoFocus={true}
            value={query}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                onSearchSubmitted(0)
              }
            }}
            onInput={(event) => onQuery(event.currentTarget.value)}
          />
          <div class="search-providers">
            {config.searchProviders.map((provider, i) => (
              <button key={i} onClick={() => onSearchSubmitted(i)}>
                {provider.name}
              </button>
            ))}
          </div>
        </div>

        <article>
          {config.categories.map((category) => (
            <Category category={category} />
          ))}
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
              Public Domain Mark 1.0
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

          <DevInfoPaneOpener>
            <DevInfoPane
              leechblockAllowPatterns={config.leechblockAllowPatterns}
            />
          </DevInfoPaneOpener>
        </footer>
      </div>
    </>
  )
}
