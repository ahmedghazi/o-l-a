<template>
  <div class="project-header">
    <h2 class="project-header__title">{{ input.title }}</h2>
    <div class="project-header__materials">{{ input.materials || 'Materials' }}</div>
    <div class="project-header__localisation">{{ input.localisation || 'Localisation' }}</div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from '~/types/schema'

defineProps<{
  input: Project
}>()
</script>

<style lang="scss">
.project-header {
  text-transform: uppercase;
  &__title {
  }
  &__localisation {
    // text-align: right;
  }
  &__materials {
    // text-align: center;
    text-indent: 1.5rem;
  }
}
</style>
