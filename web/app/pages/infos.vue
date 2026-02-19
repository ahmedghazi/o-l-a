<template>
  <div class="page-infos" v-if="data">
    <PortableText v-if="data.body" :value="data.body" />
  </div>
</template>

<script setup lang="ts">
import { PortableText } from '@portabletext/vue'

const { data } = await useSanityInfos()

useHead({
  title: data.value?.seo?.metaTitle || 'Infos',
  meta: [
    { name: 'description', content: data.value?.seo?.metaDescription || '' },
  ],
})
</script>
