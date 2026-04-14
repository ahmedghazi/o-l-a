<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'

interface Props {
  /** Border radius in px (0 = square, half of size = circle) */
  radius?: number
  /** Single letter/character to display */
  letter?: string
  /** Background fill color (hex, rgb, hsl…) */
  background?: string
  /** Foreground (text) color */
  foreground?: string
  /** Canvas size in px – favicon is always injected at this resolution */
  size?: number
}

const props = withDefaults(defineProps<Props>(), {
  radius: 8,
  letter: 'OLA',
  background: '#002f6c',
  foreground: '#ffffff',
  size: 64,
})

// ─── canvas ref ──────────────────────────────────────────────────────────────

const canvasRef = ref<HTMLCanvasElement | null>(null)

// ─── draw ─────────────────────────────────────────────────────────────────────

function draw() {
  const canvas = canvasRef.value
  if (!canvas) return

  const { size, radius, letter, background, foreground } = props
  const dpr = window.devicePixelRatio || 1

  canvas.width = size * dpr
  canvas.height = size * dpr
  canvas.style.width = `${size}px`
  canvas.style.height = `${size}px`

  const ctx = canvas.getContext('2d')!
  ctx.scale(dpr, dpr)

  // ── rounded rect background ──────────────────────────────────────────────
  ctx.clearRect(0, 0, size, size)
  ctx.beginPath()
  ctx.roundRect(0, 0, size, size, radius)
  ctx.fillStyle = background
  ctx.fill()

  // ── centred letter ────────────────────────────────────────────────────────
  const char = (letter ?? '').charAt(0) || ' '
  const fontSize = Math.round(size * 0.55)
  ctx.font = `600 ${fontSize}px system-ui, sans-serif`
  ctx.fillStyle = foreground
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(char, size / 2, size / 2 + 1) // +1 optical correction

  // ── inject / update <link rel="icon"> ────────────────────────────────────
  injectFavicon(canvas.toDataURL('image/png'))
}

// ─── favicon injection ────────────────────────────────────────────────────────

let faviconLink: HTMLLinkElement | null = null

function injectFavicon(dataUrl: string) {
  if (!faviconLink) {
    faviconLink = document.querySelector("link[rel~='icon']") as HTMLLinkElement | null

    if (!faviconLink) {
      faviconLink = document.createElement('link')
      faviconLink.rel = 'icon'
      faviconLink.type = 'image/png'
      document.head.appendChild(faviconLink)
    }
  }
  faviconLink.href = dataUrl
}

// ─── lifecycle ────────────────────────────────────────────────────────────────

onMounted(draw)

watch(() => [props.radius, props.letter, props.background, props.foreground, props.size], draw)

onBeforeUnmount(() => {
  // Optionally restore the original favicon on unmount
  if (faviconLink) faviconLink.href = '/favicon.ico'
})
</script>

<template>
  <!--
    The <canvas> is hidden by default — it exists purely to drive the favicon.
    Expose it visually in dev by setting a `visible` prop or removing `sr-only`.
  -->
  <canvas
    ref="canvasRef"
    class="canvas-favicon"
    :width="size"
    :height="size"
    :aria-label="`Favicon: ${letter}`"
    role="img"
  />
</template>

<style scoped>
.canvas-favicon {
  position: absolute;
  width: 0;
  height: 0;
  overflow: hidden;
  pointer-events: none;
  opacity: 0;
}
</style>
