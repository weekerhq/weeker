import { defineConfig } from 'astro/config'
import vue from '@astrojs/vue';

export default defineConfig({
  experimental: {
    svg: true,
  },
  integrations: [vue()]
})