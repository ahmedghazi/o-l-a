<template>
  <div class="project-header">
    <h2 class="project-header__title">{{ input.title }}</h2>
    <div class="project-header__materials">{{ input.materials }}</div>
    <div class="project-header__localisation">{{ input.localisation }}</div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from '~~/types/schema'

defineProps<{
  input: Project
}>()
</script>

<style lang="scss">
.project-header {
  &__title {
  }
  // &__location {
  //   text-align: right;
  // }
  // &__materials {
  //   text-align: center;
  // }
}
</style>
