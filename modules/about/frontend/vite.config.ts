import vue from "@vitejs/plugin-vue"
import dts from 'vite-plugin-dts'
import { defineConfig } from "vite"

import packageJson from "./package.json"

export default defineConfig({
  build: {
    // better HMR support
    emptyOutDir: false,
    target: "esnext",
    minify: false,
    lib: {
      entry: "src",
      cssFileName: "index",
    },
    rollupOptions: {
      external: Object.keys(packageJson.peerDependencies).map(lib => new RegExp(`^${lib}`)),
      output: [
        {
          entryFileNames: "[name].js",
          preserveModules: true,
          preserveModulesRoot: "src",
        },
      ],
    },
  },
  plugins: [vue(), dts()],
})
