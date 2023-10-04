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
      title: "Software Development",
      subCategories: [
        {
          title: "Engineering",
          entries: `
            The Art of Unix Programming | http://www.catb.org/esr/writings/taoup/html/
            buildingbeauty.org | https://buildingbeauty.org
            beautiful.software | https://beautiful.software
            refactoring.com | https://refactoring.com
          `,
        },
        {
          title: "Web Programming",
          entries: `
            NPM | https://npmjs.com node package manager javascript
            MDN | https://developer.mozilla.com network html css javascript js
            eslint.org | https://eslint.org
            cssreference.io | https://cssreference.io
            css-tricks.com | https://css-tricks.com
            moderncss.dev | https://moderncss.dev
            marked.js.org | https://marked.js.org
            vitejs.dev | https://vitejs.dev
            preactjs.com | https://preactjs.com
            react.dev | https://react.dev
            sqlite.org | https://sqlite.org
            json.org | https://json.org
            jwt.io | https://jwt.io
            jsonpath.com | https://jsonpath.com
            Deno | https://deno.com javascript js node
            Deno Docs | https://docs.deno.com
            flow.org | https://flow.org/
            typescriptlang.org | https://typescriptlang.org
            iconsdb.com | https://iconsdb.com
            mdsite | https://benchristel.github.io/mdsite
            Can I Use | https://caniuse.com
            Bun  | https://bun.sh javascript js node
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
