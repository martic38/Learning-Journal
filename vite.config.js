import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'aboutme.html'),
		nested: resolve(__dirname, 'hero-post.html'),
      },
    },
  },
})