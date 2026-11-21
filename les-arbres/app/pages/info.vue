<script setup lang="ts">
import { PortableText } from '@portabletext/vue'
import { INFOS_QUERY } from '~/lib/queries'
import type { Infos, Seo } from '~/types/schema'

// const { data } = await useSanityInfos()
const { data, refresh } = await useSanityQuery<Infos>(INFOS_QUERY)

if (!data.value) {
  console.error('No data returned from Sanity query')
  throw createError({
    statusCode: 404,
    message: "Désolé la page demandée n'existe pas.",
  })
}

const pageData = data.value || ({} as Infos)
const seo = pageData.seo || ({} as Seo)

useHead({
  title: seo?.metaTitle || 'Infos',
  meta: [{ name: 'description', content: seo?.metaDescription || '' }],
})
</script>

<template>
  <div class="page-infos" v-if="data">
    <!-- <pre>{{ data }}</pre> -->
    <div v-if="data.bio" class="text">
      <PortableText :value="data.bio" />
    </div>
  </div>
</template>

<style scoped>
.page-infos {
  @media (width >= 768px) {
    .text {
      max-width: 31dvw;
    }
  }
}
</style>
