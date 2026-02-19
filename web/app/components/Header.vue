<template>
  <header>
    <SmoothScroller>
      <aside>
        <div class="site-name">
          <NuxtLink to="/">{{ settings?.siteName }}</NuxtLink>
        </div>
        <nav>
          <ul>
            <li v-for="item in settings?.nav" :key="item._id">
              <NuxtLink :to="_linkResolver(item)">
                <ProjectHeader :input="item" />
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </aside>
    </SmoothScroller>
  </header>
</template>

<script setup lang="ts">
import { _linkResolver } from '~/lib/utils'

const { data: settings } = await useSanitySettings()
// console.log(settings);
</script>

<style lang="scss" scoped>
.site-name {
  margin-bottom: var(--spacing-lg);
  text-transform: uppercase;
}

nav li {
  margin-bottom: var(--spacing-md);

  a {
    text-decoration: none;
    transition: transform 0.2s ease;
    display: block;
    &:hover,
    &[aria-current='page'] {
      transform: translateX(2em);
    }
  }
}
</style>
