<template>
  <div class="logo-acronyme">
    <!-- <pre>{{ splitText }}</pre> -->
    <!-- <span v-for="letter in splitText" :key="letter">{{ letter }}</span> -->
    <span v-for="item in splitText" :key="item.accr">
      <span class="accr">{{ item.accr }}</span>
      <span class="leftover">{{ item.leftover }}</span>
    </span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  input: string
}>()

const splitText = computed(() => {
  const parts = props.input.split(' ')
  return parts.map((item) => {
    const subParts = item.split('')
    return {
      accr: subParts[0],
      leftover: subParts.slice(1).join(''),
    }
  })
})
console.log(splitText.value)
</script>

<style scoped lang="scss">
.logo-acronyme {
  display: flex;
  gap: 0.5rem;
  &:hover {
    .leftover {
      display: inline;
    }
  }
  .leftover {
    display: none;
  }
}
</style>
