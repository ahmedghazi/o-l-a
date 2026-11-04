<script setup lang="ts">
import { urlFor } from '~/lib/sanity'

defineProps<{
  image: any
  alt?: string
  width?: number
}>()
</script>

<template>
  <figure>
    <img
      v-if="image && image.asset"
      :src="
        urlFor(image.asset)
          .width(width || 2000)
          .auto('format')
          .fit('crop')
          .url()
      "
      :alt="alt || 'image'"
      :style="{ width: 'auto', height: 'auto' }"
    />
  </figure>
</template>
