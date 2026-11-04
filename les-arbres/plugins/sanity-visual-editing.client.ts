import { enableVisualEditing } from '@sanity/visual-editing'

export default defineNuxtPlugin(() => {
  if (document.querySelector('[data-sanity-overlay-container]')) return

  enableVisualEditing({
    zIndex: 9999,
  })
})
