import {defineArrayMember, defineField, defineType} from 'sanity'

const youtubeRegex =
  /^(https?:\/\/)?(www\.)?(youtube\.com\/(watch\?v=|shorts\/)|youtu\.be\/)[\w-]{6,}/i

export const portfolioType = defineType({
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().max(120),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'youtubeUrl',
      title: 'YouTube link',
      type: 'url',
      validation: (Rule) =>
        Rule.required().custom((value) => {
          if (!value) {
            return 'A YouTube link is required'
          }

          return youtubeRegex.test(value) || 'Only YouTube links are allowed'
        }),
      description: 'Paste a YouTube watch, shorts, or youtu.be URL.',
    }),
    defineField({
      name: 'thumbnail',
      title: 'Cover image',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt text',
          type: 'string',
          validation: (Rule) => Rule.max(140),
        }),
      ],
      description: 'Main image shown in portfolio listing and detail page.',
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(260),
      description: 'Short summary shown below the hero section.',
    }),
    defineField({
      name: 'images',
      title: 'Additional images',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
          options: {hotspot: true},
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt text',
              type: 'string',
              validation: (Rule) => Rule.max(140),
            }),
            defineField({
              name: 'caption',
              title: 'Caption',
              type: 'string',
              validation: (Rule) => Rule.max(180),
            }),
          ],
        }),
      ],
      description: 'Optional gallery images for the portfolio detail page.',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'thumbnail',
      subtitle: 'caption',
    },
  },
})
