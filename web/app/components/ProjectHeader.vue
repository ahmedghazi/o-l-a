<script setup lang="ts">
import type { Project } from '~/types/schema'
import { urlFor } from '~/lib/sanity'
import type { ProjectExtend } from '~/types/schema-extend'

const props = defineProps<{
  input: ProjectExtend
}>()
</script>

<template>
  <div class="project-header">
    <div class="flex">
      <h2 class="project-header__title">{{ input.title }}</h2>
      <SanityImage :image="input.imageCover" :alt="input.title" :width="40" />
    </div>
    <div class="project-header__materials">{{ input.materials || 'Materials' }}</div>
    <div class="project-header__localisation">{{ input.localisation || 'Localisation' }}</div>
  </div>
</template>

<style lang="scss">
.project-header {
  position: relative;
  text-transform: uppercase;
  &:hover {
    figure {
      opacity: 1;
    }
  }
  .flex {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  &__title {
  }
  &__localisation {
    // text-align: right;
  }
  &__materials,
  &__localisation {
    // text-align: center;
    text-indent: 1.5rem;
  }
  figure {
    opacity: 0;

    img {
      position: absolute;
      top: 0;
      max-height: 1rem;
      width: auto;
    }
  }
}
</style>
