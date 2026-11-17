import {FiHome} from 'react-icons/fi'
import {defineType, defineField} from 'sanity'
// console.log(modulesList)

export default defineType({
  name: 'landing',
  type: 'document',
  title: 'Landing (hub)',
  icon: FiHome,
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
      type: 'localeBlockContent',
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
