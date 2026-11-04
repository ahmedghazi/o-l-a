<script setup lang="ts">
import { _linkResolver } from '~/lib/utils'

// const year = parseFloat(new Date().getFullYear().toString()) // 2026

// const yearInWords = new Intl.NumberFormat('fr-FR-u-nu-fullwide', {}).format(year)
</script>

<template>
  <footer id="footer-site">
    <div class="mb-md">
      <UiLocaleSwitcher />
    </div>

    <ul>
      <li>
        <a href="http://www.olivierlellouche.com/oldw" target="_blank" rel="noopener noreferrer"
          >Le bureau</a
        >
      </li>
      <li>
        <a href="http://www.les-arbres.info" target="_blank" rel="noopener noreferrer">L’atelier</a>
      </li>
      <li>
        <a href="http://www.destihl.eu" target="_blank" rel="noopener noreferrer">La recherche</a>
      </li>
      <li>
        <a href="http://www.ecolecamondo.fr" target="_blank" rel="noopener noreferrer"
          >L’enseignement</a
        >
      </li>
      <li>
        <a
          href="http://www.imdb.com/fr/name/nm11267012/?ref_=fn_t_1"
          target="_blank"
          rel="noopener noreferrer"
          >Le plateau</a
        >
      </li>
    </ul>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  padding: var(--spacing-sm);
  text-align: center;
}
ul {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: var(--spacing-sm);
}

@media screen and (max-width: 768px) {
  footer {
    padding: 0;
  }
}
</style>
