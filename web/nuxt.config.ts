// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/sanity'],

  runtimeConfig: {
    sanityApiReadToken: '',
    public: {
      sanityProjectId: process.env.NUXT_PUBLIC_SANITY_PROJECT_ID,
      sanityDataset: process.env.NUXT_PUBLIC_SANITY_DATASET,
      sanityApiVersion: process.env.NUXT_PUBLIC_SANITY_API_VERSION || '2024-03-15',
      studioUrl: process.env.NUXT_PUBLIC_SANITY_STUDIO_URL,
    },
  },

  sanity: {
    projectId: process.env.NUXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NUXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: process.env.NUXT_PUBLIC_SANITY_API_VERSION || '2025-10-20',
    token: process.env.NUXT_SANITY_API_READ_TOKEN, // Only required when using a private dataset
    visualEditing: {
      token: process.env.NUXT_SANITY_API_READ_TOKEN,
      studioUrl: process.env.NUXT_PUBLIC_SANITY_STUDIO_URL,
      stega: true,
      mode: 'live-visual-editing',
      zIndex: 51,
    },
  },
  app: {
    head: {
      title: 'O—L—A', // default fallback title
      htmlAttrs: {
        lang: 'fr',
      },
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    },
  },
  css: ['~/assets/styles/index.scss'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@import "~/assets/styles/_variables"; @import "~/assets/styles/_mixins";',
          silenceDeprecations: ['import'],
        },
      },
    },
  },
})
