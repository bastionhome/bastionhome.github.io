import {HumanWritable} from "./config-types"

export const config: HumanWritable.Config = {
  menu: `
    TV      | https://benchristel.github.io/tv
    Recipes | https://benchristel.github.io/recipes
    Bliki   | https://github.com/benchristel/benchristel.github.io/wiki
    Gmail   | https://mail.google.com
    Call    | https://benchristel.github.io/call
  `,
  categories: [
    {
      title: "Software Engineering",
      entries: `
        NPM  | https://npmjs.com node package manager javascript
        MDN  | https://developer.mozilla.com network html css javascript js
        Bun  | https://bun.sh javascript js node
        Deno | https://deno.com javascript js node
      `,
      subCategories: [
        {
          title: "web",
          entries: `
            NPM  | https://npmjs.com node package manager javascript
            MDN  | https://developer.mozilla.com network html css javascript js
          `,
        },
      ],
    },
    {
      title: "Food",
      entries: `
        Monterey Bay Herb Co. | https://herbco.com
        maangchi.com | https://maangchi.com
      `,
    },
  ],
}
