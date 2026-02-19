<script setup lang="ts">
// import { PortableText } from '@portabletext/vue'
import ProjectHeader from '~/components/ProjectHeader.vue'
import { PROJECT_QUERY } from '~/lib/queries'
import type { Project, Seo } from '~~/types/schema'
const route = useRoute()
const { data, refresh } = await useSanityQuery<Project>(PROJECT_QUERY, {
  slug: route.params.slug,
})

if (!data.value) {
  console.error('No data returned from Sanity query')
  throw createError({
    statusCode: 404,
    message: "Désolé la page demandée n'existe pas.",
  })
}

const pageData = data.value || ({} as Project)
const seo = pageData.seo || ({} as Seo)

useHead({
  title: seo?.metaTitle || 'Olivier Lellouche Design Workshop',
  meta: [{ name: 'description', content: seo?.metaDescription || '' }],
})
</script>

<template>
  <SmoothScroller>
    <div class="template--project">
      <template v-if="data">
        <div class="mb-md">
          <ProjectHeader :input="data" />
        </div>
        <div class="images gap-md grid">
          <div class="images__item" v-for="item in data.media" :key="item._key">
            <SanityImage :image="item" :alt="data.title" />
          </div>
        </div>
      </template>
      <div v-else>please edit page</div>
    </div>
  </SmoothScroller>
</template>

<style>
.template--project {
  /* margin-bottom: var(--spacing-lg); */
}
</style>
