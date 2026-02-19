<template>
  <figure>
    <img
      :src="urlFor(image.asset).width(2000).auto('format').fit('crop').url()"
      :alt="alt || 'image'"
      :style="{ width: 'auto', height: 'auto' }"
    />
  </figure>
</template>

<script setup lang="ts">
import { urlFor } from '~/lib/sanity'

defineProps<{
  image: any
  alt?: string
}>()
</script>
