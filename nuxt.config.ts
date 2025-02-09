import tailwindcss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxtjs/color-mode',
    '@nuxtjs/seo',
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt',
    'nuxt-api-shield',
    'v-gsap-nuxt'
  ],
  fonts: {
    experimental: {
      processCSSVariables: true
    }
  },
  colorMode: {
    preference: 'dark',
    fallback: 'dark',
    classSuffix: '',
    dataValue: 'theme',
    storage: 'localStorage',
    storageKey: 'theme-color-mode'
  },
  site: {
    url: 'https://hybes.dev',
    name: 'Hybes Template',
    description: 'Hybes Template',
    image: 'https://hybes.dev/og-image.png',
  },
  seo: {
    meta: {
      description: 'Hybes Template',
      themeColor: [
        { content: '#18181b', media: '(prefers-color-scheme: dark)' },
        { content: 'white', media: '(prefers-color-scheme: light)' },
      ],
      twitterCreator: '@hybes',
      twitterSite: '@hybes',
      author: 'Hybes',
      colorScheme: 'dark light',
      applicationName: 'Hybes Template',
    }
  },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ]
    }
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  nitro: {
    experimental: {
      tasks: true
    },
    storage: {
      shield: {
        driver: "memory"
      }
    },
    scheduledTasks: {
      "*/15 * * * *": ["shield:clean"] // clean the shield storage every 15 minutes
    }
  },
  eslint: {
    config: {
      stylistic: false
    }
  }
})
