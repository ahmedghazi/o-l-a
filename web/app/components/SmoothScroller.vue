<script setup lang="ts">
import Lenis from 'lenis'

const wrapperRef = ref<HTMLElement>()
const contentRef = ref<HTMLElement>()

onMounted(() => {
  if (!wrapperRef.value || !contentRef.value) return

  const lenis = new Lenis({
    wrapper: wrapperRef.value,
    content: contentRef.value,
    syncTouch: true,
    lerp: 0.1,
    wheelMultiplier: 0.8,
    smoothWheel: true,
    orientation: 'vertical',
    gestureOrientation: 'vertical',
  })

  function raf(time: number) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)

  onUnmounted(() => {
    lenis.destroy()
  })
})
</script>

<template>
  <div ref="wrapperRef" class="smooth-scroller h-screen overflow-y-scroll">
    <div ref="contentRef" class="scroller flex">
      <slot />
    </div>
  </div>
</template>
