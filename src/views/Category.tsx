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
      <ul>{entries.map(directoryLink)}</ul>
      {subCategories.map(({title, entries: subEntries}) => (
        <section>
          <h3>{title}</h3>
          <ul>{subEntries.map(directoryLink)}</ul>
        </section>
      ))}
    </section>
  )
}

function directoryLink(link: ViewParams.Link) {
  return <DirectoryLink link={link} />
}
