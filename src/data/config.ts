import {HumanWritable} from "./config-types"

export const config: HumanWritable.Config = {
  menu: `
    TV      | https://benchristel.github.io/tv
    Recipes | https://benchristel.github.io/recipes
    Bliki   | https://github.com/benchristel/benchristel.github.io/wiki
    Gmail   | https://mail.google.com
    Call    | https://benchristel.github.io/call
  `,
  searchProviders: `
    DuckDuckGo | https://duckduckgo.com?q=%s
    YouTube | https://youtube.com/results?search_query=%s
  `,
  categories: [
    {
      title: "Software Development",
      subCategories: [
        {
          title: "Engineering",
          entries: `
            The Art of Unix Programming | http://www.catb.org/esr/writings/taoup/html/ Eric Raymond
            https://buildingbeauty.org Christopher Alexander Greg Bryant
            https://beautiful.software Christopher Alexander Greg Bryant
            https://refactoring.com Martin Fowler
          `,
        },
        {
          title: "Unix",
          entries: `
            https://hub.docker.com
            https://man7.org
          `,
        },
        {
          title: "Reference",
          entries: `
            https://unicode.org
            https://memorymanagement.org
            https://spectrum.ieee.org
            https://lawsofux.com
            https://cheatsheetseries.owasp.org
          `,
        },
        {
          title: "Web Programming",
          entries: `
            NPM | https://npmjs.com node package manager javascript
            MDN | https://developer.mozilla.com network html css javascript js
            https://eslint.org
            https://cssreference.io
            https://css-tricks.com
            https://moderncss.dev
            https://marked.js.org
            https://vitejs.dev
            https://preactjs.com
            https://react.dev
            https://sqlite.org
            https://json.org
            https://jwt.io
            https://jsonpath.com
            Deno | https://deno.com javascript js node
            Deno Docs | https://docs.deno.com
            https://flow.org/
            https://typescriptlang.org
            https://iconsdb.com
            mdsite | https://benchristel.github.io/mdsite
            https://caniuse.com
            https://bun.sh javascript js node
            Build Your Own React | https://pomb.us/build-your-own-react/ didact
          `,
        },
        {
          title: "Hosting",
          entries: `
            fly.io | https://fly.io
            render.com | https://render.com
            cloudflare.com | https://cloudflare.com
            supabase.com | https://supabase.com
            digitalocean.com | https://digitalocean.com
          `,
        },
        {
          title: "Help",
          entries: `
            stackoverflow.com | https://stackoverflow.com
            exercism.org | https://exercism.org
          `,
        },
      ],
    },
    {
      title: "Food",
      subCategories: [
        {
          title: "Merchants",
          entries: `
            https://herbco.com
          `,
        },
        {
          title: "Korean",
          keywords: "korean",
          entries: `
            https://maangchi.com
            https://koreanbapsang.com
            https://mykoreankitchen.com
          `,
        },
        {
          title: "Indian",
          keywords: "indian",
          entries: `
            https://indianhealthyrecipes.com
            https://www.vegrecipesofindia.com
          `,
        },
        {
          title: "Turkish",
          keywords: "turkish",
          entries: `
            Ozlem's Turkish Table | https://ozlemsturkishtable.com/
            Binnur's Turkish Cookbook | https://binnurturkishcookbook.blogspot.com/
          `,
        },
      ],
    },
    {
      title: "Web-based Tools",
      subCategories: [
        {
          title: "Sensing",
          entries: `
            https://timeanddate.com
            https://accuweather.com
            https://map.purpleair.com
          `,
        },
        {
          title: "Deciding",
          entries: `
            https://druthers.app
            https://decisionmatrix.app
          `,
        },
        {
          title: "Communicating",
          entries: `
            https://pop.com
            https://tuple.app
            https://benchristel.github.io/call
          `,
        },
        {
          title: "Creating",
          entries: `
            https://excalidraw.com
          `,
        },
        {
          title: "Transforming",
          entries: `
            https://pngtosvg.com
            https://jsonpath.com
            https://yamllint.com
            https://translate.google.com
          `,
        },
        {
          title: "Prototyping",
          entries: `
            Taste Playground | https://benchristel.github.io/try-taste
            https://jsfiddle.net
            https://codesandbox.io
            Flow Playground | https://flow.org/try
            TypeScript Playground | https://www.typescriptlang.org/play
          `,
        },
      ],
    },
    {
      title: "Gaming",
      subCategories: [
        {
          title: "Catalogs",
          entries: `
            https://protondb.com linux wine
            https://store.steampowered.com
            https://steamdb.info
            https://kongregate.com
          `,
        },
        {
          title: "Hosting",
          entries: `
            https://server.pro
          `,
        },
        {
          title: "Minecraft",
          keywords: "minecraft",
          entries: `
            https://minecraft.fandom.com
            https://curseforge.com
            https://minecraftmods.com
          `,
        },
        {
          title: "Age of Empires",
          entries: `
            https://ageofempires.fandom.com
          `,
        },
        {
          title: "Heroes of Might and Magic",
          entries: `
            http://celestialheavens.com
            https://maps4heroes.com/
            https://heroesofmightandmagic.com
            https://mightandmagic.fandom.com
            https://heroescommunity.com
          `,
        },
        {
          title: "Other Games",
          entries: `
            https://zero-k.info
            https://mindustrygame.github.io
          `,
        },
        {
          title: "General / Reference",
          entries: `
            https://lparchive.org
          `,
        },
      ],
    },
    {
      title: "Linux and Computer Hardware",
      keywords: "linux",
      entries: `
        https://frame.work
        https://community.frame.work
        https://packagehub.suse.com
        https://superuser.com
        https://packages.fedoraproject.org
        https://flathub.org
        https://cinnamon-spices.linuxmint.com
      `,
    },
    {
      title: "Computer Habitability",
      entries: `
        addons.mozilla.org | https://addons.mozilla.org
        LeechBlock NG | https://www.proginosko.com/leechblock/
        uBlock Origin for Firefox | https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/
        New Tab Override for Firefox | https://addons.mozilla.org/en-US/firefox/addon/new-tab-override/
        darkreader.org | https://darkreader.org
        https://href.li
      `,
    },
    {
      title: "Images",
      entries: `
        https://images.freeimages.com
        https://flickr.com
        https://cliparts.co
      `,
    },
    {
      title: "Learning",
      entries: `
        https://khanacademy.org
        Leitner system (Wikipedia) | https://en.wikipedia.org/wiki/Leitner_system srs flashcards
      `,
    },
    {
      title: "Commerce",
      entries: `
        https://herbco.com
        https://betterworldbooks.com
        https://evertype.com
        https://newegg.com
        https://bandcamp.com
        https://alternativeto.net
      `,
    },
    {
      title: "Archives and Archiving",
      entries: `
        https://archive.org
        https://versionmuseum.com
      `,
    },
    {
      title: "Books",
      entries: `
        https://books.google.com
        https://betterworldbooks.com
        https://evertype.com
        https://terebess.hu
        https://exclassics.com
      `,
    },
    {
      title: "Music",
      entries: `
        https://universocantigas.gal
        https://butterchurnviz.com
        https://open.spotify.com
        https://lyricstranslate.com
        https://musicanet.org
        https://lieder.net
        https://bandcamp.com
      `,
    },
    {
      title: "Video",
      entries: `
        https://vimeo.com
        https://vid.puffyan.us
      `,
    },
    {
      title: "Languages and Linguistics",
      entries: `
        https://akademikernewek.org.uk
        https://cornish-language.org
        https://cornishdictionary.org.uk
        https://gocornish.org
        https://zompist.com
        https://latecornishlittlebits.blogspot.com
        https://merriam-webster.com
        https://ipachart.com
        https://internationalphoneticalphabet.org
        https://dedalvs.com
      `,
    },

    {
      title: "Academia",
      entries: `
        https://researchgate.net
        https://psyarxiv.com
        https://academia.edu
        https://apa.org
        https://arxiv.org
      `,
    },

    {
      title: "Miscellaneous",
      entries: `
        https://permies.com
        https://federalregister.gov
        https://skepdic.com
        https://patternlanguage.com
        https://patreon.com
        https://en.wikiquote.org
        https://en.wikisource.org
        https://npl.wiki
      `,
    },
  ],
}
