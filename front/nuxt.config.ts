import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  future: { compatibilityVersion: 4 },
  buildDir: '.nuxt',

  srcDir: 'src/',

  modules: ['@pinia/nuxt', '@nuxt/eslint', '@nuxtjs/i18n', '@nuxt/icon'],

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      titleTemplate: '%s | Roman Zarvanskyi',
      meta: [
        { name: 'theme-color', content: '#ffffff' },
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'Roman Zarvanskyi' },
        { property: 'og:site_name', content: 'Roman Zarvanskyi' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: 'https://github.com/zarva6596.png' },
        { property: 'og:image:width', content: '460' },
        { property: 'og:image:height', content: '460' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: '@zarva6596' },
        { name: 'twitter:image', content: 'https://github.com/zarva6596.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },

  i18n: {
    locales: [
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
      { code: 'uk', language: 'uk-UA', name: 'Українська', file: 'uk.json' },
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    langDir: 'locales/',
  },

  components: [
    { path: '~/components/universal', pathPrefix: false },
    { path: '~/components/general', pathPrefix: false },
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  css: ['~/assets/css/main.css'],
})
