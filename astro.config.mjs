import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import vercel from '@astrojs/vercel/serverless'

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx()],
  markdown: {
    shikiConfig: {
      theme: 'github-light'
    }
  },
  output: 'server',
  server: {
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  adapter: vercel()
})
