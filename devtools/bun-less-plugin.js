import {plugin} from "bun"

// This plugin prevents bun from erroring when JS imports a .less file.
// The implementation is a no-op, because we don't need to process .less
// files for SSR.

plugin({
  name: "Less",
  async setup(build) {
    build.onLoad({filter: /\.less$/}, () => {
      // and returns it as a module
      return {
        contents: "",
      }
    })
  },
})
