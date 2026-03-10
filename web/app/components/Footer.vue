<template>
  <footer>
    <div class="grid gap-md md:grid-cols-3">
      <div class="copy">{{ yearInWords(year) }} © {{ settings?.siteName }}</div>
      <div class="credits">
        Credits: Designed by
        <a href="https://www.ahmedghazi.com" target="_blank">Ahmed Ghazi</a> Coded by
        <a href="https://www.ahmedghazi.com" target="_blank">Ahmed Ghazi</a> Pictures by
        <a href="#" target="_blank">Iphone SE</a>
      </div>
      <div class="maj text-right">Updated on March 2, 26 02:26</div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { _linkResolver } from '~/lib/utils'
import { yearInWords } from '~/lib/yearInWords'

const { data: settings } = await useSanitySettings()
// console.log(settings);
const year = parseFloat(new Date().getFullYear().toString()) // 2026

// const yearInWords = new Intl.NumberFormat('fr-FR-u-nu-fullwide', {}).format(year)
</script>

<style lang="scss" scoped>
footer {
  padding: var(--spacing-sm);
  // width: 100%;
  display: block;
  position: sticky;
  bottom: 0;
}
</style>
