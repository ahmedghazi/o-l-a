import type { BlockContent, LocaleBlockContent, LocaleString } from '~~/types/schema'

export type LocaleCode = 'fr' | 'en'

type LocaleField = LocaleString | LocaleBlockContent

export default defineNuxtPlugin((nuxtApp) => {
  const locale = nuxtApp.$i18n.locale

  function localizeField(field: LocaleString | null | undefined): string | undefined
  function localizeField(field: LocaleBlockContent | null | undefined): BlockContent | undefined
  function localizeField(field: LocaleField | null | undefined) {
    if (!field) return undefined
    return field[locale.value as LocaleCode] ?? field.fr ?? field.en
  }

  return {
    provide: { localizeField },
  }
})
