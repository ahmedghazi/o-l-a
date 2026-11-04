<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import Canvasfavicon from '~/components/ui/Canvasfavicon.vue'

onMounted(() => {
  _format()
  window.addEventListener('resize', _format)
})

onUnmounted(() => {
  window.removeEventListener('resize', _format)
})

function _format() {
  let vh: number = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)

  let vw: number = window.innerWidth * 0.01
  document.documentElement.style.setProperty('--vw', `${vw}px`)

  const header = document.querySelector('header#header-site')
  let headerBounding = { height: 50 }
  console.log(header)
  if (header) {
    headerBounding = header.getBoundingClientRect()
    document.documentElement.style.setProperty('--header-h', headerBounding.height + 'px')
  }

  const footer = document.querySelector('footer#footer-site')
  let footerBounding = { height: 50 }
  if (footer) {
    footerBounding = footer.getBoundingClientRect()

    document.documentElement.style.setProperty('--footer-h', footerBounding.height + 'px')
  }

  const page = document.querySelector('#page')
  if (page) {
    page.classList.remove('is-loading')
  }
}
</script>

<template>
  <div id="page" class="md: is-loading grid-cols-3 gap-md md:grid">
    <Header />
    <main>
      <slot />
      <div class="gradient"></div>
    </main>
    <Footer />
    <Canvasfavicon :radius="64" />
  </div>
</template>
