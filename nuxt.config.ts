export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  supabase: {
    redirect: false,
  },

  site: {
    url: 'https://www.newheavenitsolutions.com',
    name: 'NewHeaven IT Solutions',
  },

  sitemap: {
    strictNuxtContentPaths: false,
  },

  

  app: {
    head: {
      title: 'NewHeaven IT Solutions',
      meta: [
        { name: 'description', content: 'Fullstack development, data analysis, and AI-powered solutions that transform your business.' },
        { property: 'og:title', content: 'NewHeaven IT Solutions' },
        { property: 'og:description', content: 'Fullstack development, data analysis, and AI solutions.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: 'https://www.newheavenitsolutions.com/og-image.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: 'https://www.newheavenitsolutions.com/og-image.jpg' },
        { name: 'google-site-verification', content: 'WwU9jtFyICJe6drumJjD9bsJfqQc5FOR0844aDoDLwM' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      script: [
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-0ZJNJ8KYCX',
          async: true,
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0ZJNJ8KYCX');
          `,
          type: 'text/javascript',
        },
      ],
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
    '@nuxtjs/supabase',
    '@nuxtjs/sitemap',
    
  ],
})