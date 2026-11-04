<template>
  <ul class="locale-switcher">
      <li><button :class="{ active: $i18n.locale === 'fr' }" @click="$i18n.setLocale('fr')">FR</button></li>
    <li><button :class="{ active: $i18n.locale === 'en' }" @click="$i18n.setLocale('en')">EN</button></li>
  </ul>
</template>

<style scoped lang="scss">
.locale-switcher {
  display: flex;
  gap: 1rem;
  justify-content: center;

  button {
    background: none;
    border: none;
    cursor: pointer;
    &.active {
      text-decoration: underline;
    }
  }
}
</style>
