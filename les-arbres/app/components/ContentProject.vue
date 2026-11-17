<script setup lang="ts">
import { PortableText } from '@portabletext/vue'
import type { Project, Seo } from '~/types/schema'

defineProps<{
  data: Project
}>()
</script>
<template>
  <div class="content-project">
    <div class="header mb-md">
      <ProjectHeader :input="data" :collapsed="true" />
      <div v-if="data.text || data.links" class="mt-md-">
        <ul v-if="data.links">
          <li v-for="link in data.links" :key="link._key">
            <a :href="link.link" target="_blank">{{ link.label }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="images grid gap-sm">
      <div class="images__item" v-for="item in data.media" :key="item._key">
        <SanityImage :image="item" :alt="data.title" :width="1920" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  gap: var(--spacing-sm);
  position: sticky;
  top: var(--spacing-sm);
  color: white;
  mix-blend-mode: difference;
  @media (max-width: 768px) {
    top: var(--header-h);
    margin-bottom: var(--spacing-sm);
  }
}
</style>
