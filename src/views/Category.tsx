import {h} from "preact"
import {ViewParams} from "./view-params"
import {DirectoryLink} from "./DirectoryLink"
import "./Category.less"

type Props = {
  category: ViewParams.Category
}

export function Category({category}: Props) {
  const {title, entries, subCategories} = category
  return (
    <section class="category">
      <h2>{title}</h2>
      <ul>
        {entries.map((link) => (
          <DirectoryLink link={link} />
        ))}
      </ul>
      {subCategories.map(({title, entries}) => (
        <section>
          <h3>{title}</h3>
          <ul>
            {entries.map((link) => (
              <DirectoryLink link={link} />
            ))}
          </ul>
        </section>
      ))}
    </section>
  )
}
