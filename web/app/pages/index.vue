<script setup lang="ts">
import { HOME_QUERY } from '~/lib/queries'
import type { Home, Seo } from '~/types/schema'
// import type { Home, Seo } from '~~/types/schema'

const { data, refresh } = await useSanityQuery<Home>(HOME_QUERY)

if (!data.value) {
  console.error('No data returned from Sanity query')
  throw createError({
    statusCode: 404,
    message: "Désolé la page demandée n'existe pas.",
  })
}

const pageData = data.value || ({} as Home)
const seo = pageData.seo || ({} as Seo)

const randomIndex = useState('homeRandomIndex', () =>
  Math.floor(Math.random() * (data.value?.randomImages?.length ?? 0)),
)
const randomImage = data.value?.randomImages?.[randomIndex.value]
useHead({
  title: data.value?.seo?.metaTitle || 'Olivier Lellouche Design Workshop',
  meta: [{ name: 'description', content: data.value?.seo?.metaDescription || '' }],
})
</script>

<template>
  <div class="template template--home">
    <!-- <SmoothScroller v-if="data?.randomImages?.length"> -->
    <SanityImage :image="randomImage" />
    <!-- </SmoothScroller> -->
  </div>
</template>
