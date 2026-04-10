import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
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
      title: 'Title',
      type: 'string',
      group: 'editorial',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      group: 'editorial',
    }),
    defineField({
      name: 'localisation',
      type: 'string',
      title: 'Localisation',
      group: 'editorial',
    }),
    defineField({
      name: 'materials',
      type: 'string',
      title: 'materials',
      group: 'editorial',
    }),
    defineField({
      name: 'year',
      type: 'date',
      title: 'Year',
      group: 'editorial',
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'blockContent',
      group: 'editorial',
    }),
    defineField({
      name: 'links',
      title: 'Liens',
      type: 'array',
      of: [{type: 'linkExternal'}],
      group: 'editorial',
    }),
    // defineField({
    //   name: 'coverImage',
    //   title: 'Cover image',
    //   description: 'visible sur les pages de liste',
    //   type: 'image',
    //   options: {
    //     hotspot: true,
    //   },
    //   group: 'editorial',
    // }),
    // defineField({
    //   name: 'tags',
    //   title: 'Tags',
    //   type: 'array',
    //   of: [{type: 'reference', to: {type: 'tag'}}],
    // }),
    // defineField({
    //   name: 'publishedAt',
    //   title: 'Published at',
    //   type: 'datetime',
    // }),
    // defineField({
    //   name: 'body',
    //   title: 'Body',
    //   type: 'blockContent',
    //   group: 'editorial',
    // }),
    // defineField({
    //   name: 'playbackId',
    //   title: 'Playback ID',
    //   description: 'From livepeer',
    //   type: 'string',
    //   group: 'editorial',
    // }),
    defineField({
      name: 'media',
      type: 'array',
      of: [
        {
          type: 'image',
        },
      ],
      group: 'editorial',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      slug: 'slug.current',
      media: 'media.0',
    },
    prepare(selection: {title: string; slug: string; media: any}) {
      const {slug} = selection
      return {...selection, subtitle: slug && `at ${slug}`}
    },
  },
})
