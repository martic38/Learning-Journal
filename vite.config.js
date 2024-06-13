import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        aboutme: resolve(__dirname, 'aboutme.html'),
		heropost: resolve(__dirname, 'hero-post.html'),
      },
    },
  },
})