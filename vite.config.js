import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        // main: resolve(__dirname, 'aboutme.html'),
		// main: resolve(__dirname, 'hero-post.html'),
      },
    },
  },
})