export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  content: {
    database: {
      type: 'postgres',
      url: process.env.NUXT_CONTENT_DB_URL,
    }
  },

  supabase: {
    redirect: false,
  },

  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || 'https://newheavenit.com',
    name: 'NewHeaven IT Solutions',
    description: 'Fullstack development, data analysis, and AI-powered solutions that transform your business.',
    defaultLocale: 'en',
  },

  ogImage: {
    enabled: true,
  },

  sitemap: {
    strictNuxtContentPaths: true,
  },

  robots: {
    disallow: [],
  },

  schemaOrg: {
    identity: {
      type: 'Organization',
      name: 'NewHeaven IT Solutions',
      url: process.env.NUXT_PUBLIC_SITE_URL || 'https://newheavenit.com',
      logo: '/logo.png',
      sameAs: [
        'https://github.com/your-github',
        'https://linkedin.com/in/your-linkedin',
      ],
    },
  },

  vite: {
    optimizeDeps: {
      include: [
        '@unhead/schema-org/vue',
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
    '@nuxt/content',
    '@nuxtjs/seo',
    '@nuxtjs/supabase',
  ]
})
