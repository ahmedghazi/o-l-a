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
        <ul v-if="settings?.socials && settings.socials.length > 0" class="socials hidden-sm">
          <li v-for="social in settings?.socials" :key="social._id">
            <NuxtLink :to="social.url">
              {{ social.name }}
            </NuxtLink>
          </li>
        </ul>
        <button class="sm-only" @click="_toggle(!isOpen)">{{ isOpen ? 'Close' : 'Menu' }}</button>
      </div>

      <nav :class="{ 'is-open': isOpen === true, 'hide-sb': true }">
        <ul>
          <li v-for="item in settings?.nav" :key="item._id">
            <NuxtLink :to="_linkResolver(item)">
              <ProjectHeader :input="item" />
            </NuxtLink>
          </li>
          <li v-for="item in settings?.nav" :key="item._id">
            <NuxtLink :to="_linkResolver(item)">
              <ProjectHeader :input="item" />
            </NuxtLink>
          </li>
        </ul>
        <ul v-if="settings?.socials && settings.socials.length > 0" class="socials sm-only">
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

<style lang="scss" scoped>
header {
  text-transform: uppercase;
  --gap: calc(var(--spacing-lg) * 1.65);
  --top-h: calc(var(--gap) + 1.2em);
}
aside {
  position: sticky;
  top: var(--spacing-sm);
}

.top {
  margin-bottom: var(--gap);
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
}
nav {
  height: calc(100dvh - calc(var(--footer-h) + var(--top-h) + var(--spacing-sm)));
  overflow-y: auto;
  padding-bottom: calc(var(--footer-h) + 1em);
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
