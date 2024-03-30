import {HumanWritable} from "./config-types"

export const config: HumanWritable.Config = {
  menu: `
    TV      | https://benchristel.github.io/tv
    Recipes | https://benchristel.github.io/recipes
    Bliki   | https://github.com/benchristel/benchristel.github.io/wiki
    Gmail   | https://mail.google.com
    Guide   | https://bensguide.substack.com
  `,
  searchProviders: `
    DuckDuckGo | https://html.duckduckgo.com/html/?q=%s
    YouTube | https://youtube.com/results?search_query=%s
    GitHub | https://github.com/search?q=%s
    NPM | https://www.npmjs.com/search?q=%s
    Openverse | https://openverse.org/search/?q=%s
    Unicode | https://www.fileformat.info/info/unicode/char/search.htm?q=%s&han=Y&preview=entity
    iconsdb | https://www.iconsdb.com/black-icons/?search=%s
    Cornish Dict. | https://cornishdictionary.org.uk/#%s
    Wikipedia | https://en.wikipedia.org/w/index.php?search=%s
  `,
  customLeechblockAllowPatterns: `
    bastionhome.github.io
    localhost
    127.0.0.1
    youtube.com/channel*
    youtube.com/@*
    youtube.com/playlist*
    youtube.com/results*
    youtube.com/watch*
    dasichuanrestaurant.com
    doordash.com
    yelp.com
    opentable.com
  `,
  categories: [
    {
      title: "Software Development",
      keywords: "software development",
      subCategories: [
        {
          title: "Engineering",
          keywords: "engineering",
          entries: `
            The Art of Unix Programming | http://www.catb.org/esr/writings/taoup/html/ Eric Raymond
            https://buildingbeauty.org Christopher Alexander Greg Bryant
            https://beautiful.software Christopher Alexander Greg Bryant
            https://refactoring.com Martin Fowler
            https://dreamsongs.com Richard Gabriel
          `,
        },
        {
          title: "Unix",
          keywords: "unix",
          entries: `
            https://hub.docker.com
            https://man7.org
          `,
        },
        {
          title: "Reference",
          keywords: "reference",
          entries: `
            https://unicode.org
            https://memorymanagement.org
            https://lawsofux.com
            https://cheatsheetseries.owasp.org
            https://www.w3.org world wide web consortium
          `,
        },
        {
          title: "Web Programming",
          keywords: "web programming",
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
            https://codemirror.net
            https://eloquentjavascript.net
          `,
        },
        {
          title: "Languages",
          entries: `Zig | https://ziglang.org`,
        },
        {
          title: "Hosting",
          keywords: "hosting",
          entries: `
            https://gitlab.com
            https://surge.sh/
            fly.io | https://fly.io
            render.com | https://render.com
            cloudflare.com | https://cloudflare.com
            supabase.com | https://supabase.com
            digitalocean.com | https://digitalocean.com
            https://hub.docker.com
            https://adaptable.io
            alwaysdata.com | https://www.alwaysdata.com/en/
            https://www.argonaut.dev/
            https://www.cyclic.sh/
            https://domcloud.co/
            https://www.koyeb.com/
            https://www.northflank.com/
            https://www.withcoherence.com/
          `,
        },
        {
          title: "Help",
          keywords: "help",
          entries: `
            stackoverflow.com | https://stackoverflow.com
            exercism.org | https://exercism.org
          `,
        },
        {
          title: "On Mac OS",
          keywords: "apple macintosh",
          entries: `
            Homebrew | https://brew.sh
          `,
        },
      ],
    },
    {
      title: "Food",
      keywords: "food",
      subCategories: [
        {
          title: "Merchants",
          entries: `
            Sunridge Farms | https://shopsunridgefarms.com bulk
            https://herbco.com
            Byrd's Filling Station | https://byrdsfillingstation.com/pages/in-store-bulk-product-list-non-food
          `,
        },
        {
          title: "Korean",
          keywords: "korean recipes cookbook",
          entries: `
            https://maangchi.com
            https://koreanbapsang.com
            https://mykoreankitchen.com
          `,
        },
        {
          title: "Indian",
          keywords: "indian recipes cookbook",
          entries: `
            https://indianhealthyrecipes.com
            https://www.vegrecipesofindia.com
          `,
        },
        {
          title: "Turkish",
          keywords: "turkish recipes cookbook",
          entries: `
            Ozlem's Turkish Table | https://ozlemsturkishtable.com/
            Binnur's Turkish Cookbook | https://binnurturkishcookbook.blogspot.com/
          `,
        },
        {
          title: "French",
          keywords: "french recipes cookbook",
          entries: `
            https://www.pardonyourfrench.com
          `,
        },
      ],
    },
    {
      title: "Web-based Tools",
      keywords: "web based tools",
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
            https://pivotaltracker.com
          `,
        },
        {
          title: "Calculating",
          entries: `
            www.wolframalpha.com
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
          title: "Recording",
          entries: `
            https://pivotaltracker.com
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
      keywords: "gaming games",
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
            https://maps4heroes.com
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
      keywords: "computing computers browsers extensions",
      entries: `
        addons.mozilla.org | https://addons.mozilla.org
        LeechBlock NG | https://www.proginosko.com/leechblock/
        uBlock Origin for Firefox | https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/
        New Tab Override for Firefox | https://addons.mozilla.org/en-US/firefox/addon/new-tab-override/
        darkreader.org | https://darkreader.org
        https://href.li
        https://alternativeto.net
      `,
    },
    {
      title: "Images",
      keywords: "images",
      entries: `
        https://images.freeimages.com
        https://flickr.com
        https://cliparts.co
        https://search.creativecommons.org/
      `,
    },
    {
      title: "Learning",
      keywords: "learning educational",
      entries: `
        https://khanacademy.org
        Leitner system (Wikipedia) | https://en.wikipedia.org/wiki/Leitner_system srs flashcards
      `,
    },
    {
      title: "Commerce",
      keywords: "shopping amazon",
      entries: `
        Sunridge Farms | https://shopsunridgefarms.com bulk
        https://herbco.com monterey bay herb company bulk
        https://betterworldbooks.com
        https://evertype.com
        https://newegg.com
        https://bandcamp.com music
        qobuz.com | https://qobuz.com music
        https://everynoise.com
        https://alternativeto.net software tools
        Byrd's Filling Station | https://byrdsfillingstation.com/pages/in-store-bulk-product-list-non-food bulk
      `,
    },
    {
      title: "Archives and Archiving",
      keywords: "archives",
      entries: `
        https://archive.org
        https://ghostarchive.org
        https://versionmuseum.com
      `,
    },
    {
      title: "Books",
      keywords: "books",
      entries: `
        https://books.google.com
        https://betterworldbooks.com
        https://www.ebooks.com
        https://evertype.com
        https://terebess.hu
        https://exclassics.com
        https://en.wikibooks.org
      `,
      subCategories: [
        {
          title: "Audiobooks",
          keywords: "audiobooks",
          entries: `
            https://librivox.org
            His Last Bow (Sherlock Holmes) | https://benchristel.github.io/yt/#https://www.youtube.com/watch?v=aV3MnZW-rbA sir arthur conan doyle
            The Return of Sherlock Holmes | https://benchristel.github.io/yt/#https://www.youtube.com/watch?v=vzFCXmbdmNk sir arthur conan doyle
          `,
        },
      ],
    },
    {
      title: "Music",
      keywords: "music",
      subCategories: [
        {
          title: "Lyrics",
          keywords: "lyrics",
          entries: `
            https://lyricstranslate.com
            https://universocantigas.gal
            https://lieder.net
            https://musicanet.org
          `,
        },
        {
          title: "Visualizers",
          keywords: "visualizers",
          entries: `
            https://butterchurnviz.com
          `,
        },
        {
          title: "Streaming",
          keywords: "streaming",
          entries: `
            https://bandcamp.com
            https://deezer.com
            https://open.spotify.com
            qobuz.com | https://www.qobuz.com/us-en/discover
          `,
        },
        {
          title: "Stores",
          keywords: "buying purchase purchasing stores",
          entries: `
            qobuz.com | https://www.qobuz.com/us-en/discover
          `,
        },
        {
          title: "History",
          keywords: "history",
          entries: `
            https://albumoftheyear.org history
            https://lieder.net
          `,
        },
      ],
    },
    {
      title: "Video",
      keywords: "videos",
      entries: `
        https://vimeo.com
        Invidious | https://vid.puffyan.us
        WeVidi | https://wevidi.net
        My 2000's TV | https://my00stv.com/
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
        http://www.hungarianreference.com
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
      title: "Meditation",
      keywords: "meditation",
      entries: `
        https://benchristel.github.io/meditation
        30-minute meditation, bells every 5 minutes | https://benchristel.github.io/yt/#https://www.youtube.com/watch?v=AoDoci_oAvw
      `,
      subCategories: [
        {
          title: "Sit, Breathe, Wake Up! (Culadasa)",
          keywords: "sit breathe wake up culadasa",
          entries: `
            Video 1 (40m) | https://benchristel.github.io/yt/#https://www.youtube.com/watch?v=UG-0XGpesgs
            Video 2 (43m) | https://benchristel.github.io/yt/#https://www.youtube.com/watch?v=IeXWFRs5cGk
            Video 3 (46m) | https://benchristel.github.io/yt/#https://www.youtube.com/watch?v=SRqXq570Cf0
            Video 4 (21m) | https://benchristel.github.io/yt/#https://www.youtube.com/watch?v=aNFc4veG61E
            Video 5 (35m) | https://benchristel.github.io/yt/#https://www.youtube.com/watch?v=gB4_JS4jsb0
            Video 7 (52m) | https://benchristel.github.io/yt/#https://www.youtube.com/watch?v=LBDV7jmZL8s
            Video 8 (46m) | https://benchristel.github.io/yt/#https://www.youtube.com/watch?v=nbvx7K_Zh0U
            Video 9 (25m) | https://benchristel.github.io/yt/#https://www.youtube.com/watch?v=SpTDGyhoFho
          `,
        },
      ],
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
        http://www.livingneighborhoods.org
        https://ytoo.org/
      `,
    },
  ],
}
