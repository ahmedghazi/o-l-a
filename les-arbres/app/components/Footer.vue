<script setup lang="ts">
import { _linkResolver } from '~/lib/utils'
import { yearInWords } from '~/lib/yearInWords'

const { data: settings } = await useSanitySettings()
const year = parseFloat(new Date().getFullYear().toString()) // 2026

// const yearInWords = new Intl.NumberFormat('fr-FR-u-nu-fullwide', {}).format(year)
</script>

<style lang="scss" scoped>
footer {
  padding: var(--spacing-sm);
  // width: 100%;
  display: block;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  @media screen and (max-width: 768px) {
    padding: 0;
  }
}
</style>

<template>
  <footer id="footer-site">
    <div class="grid items-end gap-sm md:grid-cols-3 md:gap-md">
      <div class="copy">{{ year }} © {{ settings?.siteName }}</div>
      <div class="credits">
        Credits: Designed & Code by
        <a href="https://www.ahmedghazi.com" target="_blank">Ahmed Ghazi</a>
      </div>
      <div class="maj hidden md:text-right">Updated on {{ settings._updatedAt }}</div>
    </div>
  </footer>
</template>
