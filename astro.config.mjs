import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  markdown: {
    syntaxHighlight: 'prism',
  },
  integrations: [mdx(), react()],
})
