<script setup lang="ts">
import { PortableText } from '@portabletext/vue'
import { portableTextComponents } from '~/lib/portableTextComponents'
import { HOME_QUERY, LANDING_QUERY } from '~/lib/queries'
import type { Seo } from '~/types/schema'
import type { Landing } from '~~/types/schema'
// import type { Home, Seo } from '~~/types/schema'

const { data, refresh } = await useSanityQuery<Landing>(LANDING_QUERY)

if (!data.value) {
  console.error('No data returned from Sanity query')
  throw createError({
    statusCode: 404,
    message: "Désolé la page demandée n'existe pas.",
  })
}

const pageData = data.value || ({} as Landing)
const seo = pageData.seo || ({} as Seo)

useHead({
  title: data.value?.seo?.metaTitle || 'Olivier Lellouche Design Workshop',
  meta: [{ name: 'description', content: data.value?.seo?.metaDescription || '' }],
})
</script>

<template>
  <div class="template template--landing">

    <div class="image">
      <SanityImage :image="data?.image" />
    </div>
    <div class="text">
      <PortableText :value="$localizeField(data?.text) ?? []"  :components="portableTextComponents"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.template--landing {
  background-color: var(--color-bg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  .image {
    mix-blend-mode: lighten;
  }
  :deep(figure img) {
    max-height: 50vh;

  }

  .text {
    text-align: center;
  }
}
</style>
