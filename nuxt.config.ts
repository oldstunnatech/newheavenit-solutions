export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  // content: {
  //   database: {
  //     type: 'postgres',
  //     url: process.env.NUXT_CONTENT_DB_URL,
  //   }
  // },

  supabase: {
    redirect: false,
  },

  app: {
    head: {
      title: 'NewHeaven IT Solutions',
      meta: [
        { name: 'description', content: 'Fullstack development, data analysis, and AI-powered solutions that transform your business.' },
        { property: 'og:title', content: 'NewHeaven IT Solutions' },
        { property: 'og:description', content: 'Fullstack development, data analysis, and AI solutions.' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
      ]
    }
  },

  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/fonts',
    // '@nuxt/content',
    '@nuxtjs/supabase',
  ]
})
