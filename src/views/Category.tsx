import {h} from "preact"
import {ViewParams} from "./view-params"
import {DirectoryLink} from "./DirectoryLink"
import "./Category.less"

type Props = {
  category: ViewParams.Category
}

export function Category(props: Props) {
  return (
    <section class="category">
      <h2>{props.category.title}</h2>
      <ul>
        {props.category.entries.map((link) => (
          <DirectoryLink link={link} />
        ))}
      </ul>
      {props.category.subCategories.map((subCategory) => (
        <section>
          <h3>{subCategory.title}</h3>
          <ul>
            {subCategory.entries.map((link) => (
              <DirectoryLink link={link} />
            ))}
          </ul>
        </section>
      ))}
    </section>
  )
}
