import {defineType, defineField} from 'sanity'
import {HomeIcon} from '@sanity/icons'
// console.log(modulesList)

export default defineType({
  name: 'landing',
  type: 'document',
  title: 'Landing (hub)',
  icon: HomeIcon,
  groups: [
    {
      default: true,
      name: 'editorial',
      title: 'Editorial',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    defineField({
      name: 'seo',
      type: 'seo',
      group: 'seo',
    }),
    defineField({
      name: 'title',
      type: 'string',
      title: 'Titre',
      group: 'editorial',
    }),

    defineField({
      name: 'image',
      title: 'Image ',
      type: 'image',
      group: 'editorial',
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'blockContent',
      group: 'editorial',
    }),
  ],
  preview: {
    prepare() {
      return {
        subtitle: '/',
        title: 'Landing (hub)',
      }
    },
  },
})
