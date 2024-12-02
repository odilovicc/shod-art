import Aura from '@primevue/themes/aura'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@primevue/nuxt-module', "@pinia/nuxt", '@nuxtjs/google-fonts','@vueuse/motion/nuxt'],
  server: {     
    port: 3200, // default: 3000     
    host: '0.0.0.0', // default: localhost   
  },
  primevue: {
    options: {
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: "app-dark"
        }
      }
    }
  },
  googleFonts: {
    families: {
      Inter: {
        wght: [100, 400, 700, 900],
        ital: [100, 400, 700]
      }
    },
    display: 'swap',
    preconnect: true
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["~/assets/css/global.css", 'primeicons/primeicons.css'],
  components: [
    {
      path: "~/components",
      pathPrefix: false
    }
  ],
  runtimeConfig: {
    public: {
      motion: {
        directives: {
          'pop-bottom': {
            initial: {
              scale: 0,
              opacity: 0,
              y: 100,
            },
            visible: {
              scale: 1,
              opacity: 1,
              y: 0,
            }
          }
        }
      }
    }
  }
})