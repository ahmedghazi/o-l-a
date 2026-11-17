<script setup lang="ts">
import { ALL_PROJECTS_QUERY, PROJECT_QUERY } from '~/lib/queries'
import type { Project, Seo } from '~/types/schema'

const route = useRoute()
const { data: projects, refresh: refreshProjects } =
  await useSanityQuery<Project[]>(ALL_PROJECTS_QUERY)
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

const { items, nextProject, sentinel } = useNextProject(pageData, projects)
</script>

<template>
  <!-- <SmoothScroller> -->
  <div class="template template--project">
    <template v-if="data">
      <div v-for="item in items" :key="item._id" class="project-item mb-xl" :data-id="item._id">
        <ContentProject :data="item" />
      </div>
      <div v-if="nextProject" ref="sentinel" class="project-sentinel"></div>
    </template>
    <div v-else>please edit page</div>
  </div>
  <!-- </SmoothScroller> -->
</template>

<style>
.template--project {
  /* margin-bottom: var(--spacing-lg); */
}
</style>
