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
        Rule.custom((value, context) => {
          const document = context?.document as
            | {thumbnail?: {asset?: {_ref?: string}}}
            | undefined
          const hasThumbnail = Boolean(document?.thumbnail?.asset?._ref)

          if (!value && !hasThumbnail) {
            return 'Add a YouTube link or upload a cover image.'
          }

          if (value && !youtubeRegex.test(value)) {
            return 'Only YouTube links are allowed'
          }

          return true
        }),
      description: 'Optional. Paste a YouTube watch, shorts, or youtu.be URL.',
    }),
      defineField({
        name: 'gif',
        title: 'GIF preview upload',
        type: 'file',
        options: {accept: 'image/gif'},
        description: 'Optional animated preview. Prefer upload; falls back to link if empty.',
      }),
      defineField({
        name: 'gifUrl',
        title: 'GIF preview link',
        type: 'url',
        description: 'Optional GIF URL if you do not upload a file.',
      }),
    defineField({
      name: 'thumbnail',
      title: 'Cover image',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const document = context?.document as {youtubeUrl?: string} | undefined
          const hasYoutube = Boolean(document?.youtubeUrl)
          const hasThumbnail = Boolean(value?.asset)

          if (!hasYoutube && !hasThumbnail) {
            return 'Upload a cover image or add a YouTube link.'
          }

          return true
        }),
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
