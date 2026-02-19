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
    },
  },

  sanity: {
    // minimal: false,
    projectId: process.env.NUXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NUXT_PUBLIC_SANITY_DATASET,
    useCdn: true, // `false` if you want to ensure fresh data
    apiVersion: process.env.NUXT_PUBLIC_SANITY_API_VERSION || '2024-03-15',
    globalHelper: true,
    // visualEditing: {
    //   studioUrl: process.env.NUXT_PUBLIC_SANITY_STUDIO_URL || 'http://localhost:3333',
    //   token: process.env.NUXT_SANITY_API_READ_TOKEN,
    //   zIndex: 9999,
    //   // stega: true,
    // },
    typegen: {
      enabled: true,
      schemaTypesPath: '~/types/schema-typegen.ts',
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
    optimizeDeps: {
      exclude: ['@sanity/visual-editing'],
    },
    ssr: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
    },
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
