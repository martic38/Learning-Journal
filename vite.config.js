import {defineConfig} from "vite"
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        heropost: resolve(__dirname, 'heropost.html'),
        aboutme: resolve(__dirname, 'aboutme.html')
      },
    },
  },
})