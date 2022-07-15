import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: 'src',
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  css: [
    '~/assets/scss/main.scss'
  ],
  head: {
    title: 'onemeaning.dev - Sebastian Drzewicki',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      // {
      //   hid: 'description', name: 'description', content: `
      //   Hi there, I'm Sebastian and for about couple of years I work as a Software Developer (specifically with Javascript).
      //   This is my personal blog where I share what I enjoy,
      //   experiment with new tools and keep notes on what I had already learned.
      // `,
      // },
      // { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'crossorigin' },
      {
        rel: 'preload',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap'
      },
      {
        rel: 'stylesheet',
        media: 'print',
        onload: 'this.onload=null;this.removeAttribute(\'media\');',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap'
      }
    ]
  }
})
