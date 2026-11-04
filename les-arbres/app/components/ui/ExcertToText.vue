<script setup lang="ts">
import { PortableText } from '@portabletext/vue'
import type { BlockContent } from '~~/types/schema'

const props = defineProps<{
  content: BlockContent
  words?: number
}>()

const expanded = ref(false)

const excerptText = computed(() => {
  const firstBlock = props.content?.find(
    (block) => block._type === 'block' && block.children?.length,
  )
  if (!firstBlock) return ''

  const fullText = (firstBlock.children ?? []).map((child) => child.text ?? '').join('')

  return props.words
    ? fullText.split(/\s+/).slice(0, props.words).join(' ') + '…'
    : (fullText.match(/^.+?[.!?](?:\s|$)/)?.[0].trim() ?? fullText)
})
</script>

<template>
  <div class="portable-text text">
    <p v-if="!expanded">
      {{ excerptText }}{{ ' '
      }}<button class="read-more text-secondary mx-sm" @click="expanded = true">plus</button>
    </p>
    <PortableText v-else :value="content" />
  </div>
</template>
<style scoped>
p {
}
.read-more {
  display: inline;
  vertical-align: baseline;
  line-height: inherit;
  font-size: inherit;
}
</style>
