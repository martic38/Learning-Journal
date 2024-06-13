import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'nested/aboutme.html'),
		nested: resolve(__dirname, 'nested/hero-post.html'),
      },
    },
  },
})