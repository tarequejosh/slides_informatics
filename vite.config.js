import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

const repoName = 'slides_informatics'

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? `/${repoName}/` : '/',
  plugins: [react(), viteSingleFile()],
  build: {
    assetsInlineLimit: 100000000, // Inline all images and assets
  }
})
