<template>
  <header id="header-site">
    <!-- <SmoothScroller> -->
    <aside>
      <div class="top">
        <div class="site-name">
          <NuxtLink to="/">
            <LogoAcronyme :input="settings?.siteName" />
          </NuxtLink>
        </div>
        <ul class="socials hidden-sm">
          <li v-for="social in settings?.socials" :key="social._id">
            <NuxtLink :to="social.url">
              {{ social.name }}
            </NuxtLink>
          </li>
        </ul>
        <button class="sm-only" @click="_toggle(!isOpen)">{{ isOpen ? 'Close' : 'Menu' }}</button>
      </div>

      <nav :class="{ 'is-open': isOpen === true }">
        <ul>
          <li v-for="item in settings?.nav" :key="item._id">
            <NuxtLink :to="_linkResolver(item)">
              <ProjectHeader :input="item" />
            </NuxtLink>
          </li>
        </ul>
        <ul class="socials sm-only">
          <li v-for="social in settings?.socials" :key="social._id">
            <NuxtLink :to="social.url">
              {{ social.name }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </aside>
    <!-- </SmoothScroller> -->
  </header>
</template>

<script setup lang="ts">
import { _linkResolver } from '~/lib/utils'

const { data: settings } = await useSanitySettings()
// console.log(settings.nav)
const isOpen = ref<boolean>(false)
const _toggle = (val: boolean) => {
  // console.log('toggle', val)
  isOpen.value = val
}

const route = useRoute()

watch(
  route,
  (value) => {
    _toggle(false)
  },
  { deep: true, immediate: true },
)
</script>

<style lang="scss" scoped>
header {
  text-transform: uppercase;
}
aside {
  position: sticky;
  top: var(--spacing-sm);
}
.top {
  margin-bottom: calc(var(--spacing-lg) * 1.65);
  display: flex;
  justify-content: space-between;
}
.site-name {
}

nav li {
  margin-bottom: var(--spacing-md);
  a {
    text-decoration: none;
    transition: transform 0.2s ease;
    display: block;
    &:hover,
    &[aria-current='page'] {
      // transform: translateX(2em);
      text-decoration: underline;
    }
  }
}
@media screen and (max-width: 768px) {
  header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    padding: var(--spacing-sm);
  }
  aside {
    position: relative;
    top: 0;
  }
  .top {
    position: relative;
    z-index: 1;
    margin: 0;
  }
  nav {
    position: fixed;
    inset: 0;
    padding: var(--spacing-sm);
    padding-top: calc(var(--header-h) + var(--spacing-sm));
    background: #fff;
    display: none;
    z-index: 0;
    &.is-open {
      display: block;
    }
  }
}
</style>
