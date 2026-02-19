import {CogIcon} from '@sanity/icons'
import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Réglages (header, footer, ...)',
  type: 'document',
  icon: CogIcon,
  groups: [
    // {
    //   default: true,
    //   name: 'navigation',
    //   title: 'Navigation',
    // },
    {
      default: true,
      name: 'seo',
      title: 'Default SEO',
    },
    {
      name: 'header',
      title: 'Header',
    },
    {
      name: 'footer',
      title: 'Footer',
    },
    {
      name: 'misc',
      title: 'Misc',
    },
    {
      name: 'design',
      title: 'Design',
    },
  ],
  fields: [
    // defineField({
    //   name: 'seo',
    //   title: 'Defauly SEO',
    //   type: 'seo',
    //   group: 'seo',
    // }),
    defineField({
      name: 'siteName',
      title: 'Nom du site',
      type: 'string',
      group: 'header',
    }),

    defineField({
      name: 'nav',
      title: 'Nav',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'project'}]}],
      group: 'header',
    }),

    defineField({
      name: 'message404',
      title: 'Message 404',
      type: 'blockContent',
      group: 'misc',
    }),

    defineField({
      name: 'customCss',
      type: 'text',
      group: 'design',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Réglages (header, footer, ...)',
      }
    },
  },
})
