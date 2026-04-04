import {defineArrayMember, defineField, defineType} from 'sanity'

const youtubeRegex =
  /^(https?:\/\/)?(www\.)?(youtube\.com\/(watch\?v=|shorts\/)|youtu\.be\/)[\w-]{6,}/i

export const portfolioType = defineType({
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  fieldsets: [
    {
      name: 'basics',
      title: 'Basics',
    },
    {
      name: 'media',
      title: 'Media',
    },
    {
      name: 'details',
      title: 'Details',
      options: {collapsible: true, collapsed: false},
    },
    {
      name: 'publish',
      title: 'Publish',
      options: {collapsible: true, collapsed: true},
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      fieldset: 'basics',
      validation: (Rule) => Rule.required().max(120),
    }),
    defineField({
      name: 'slug',
      title: 'URL slug',
      type: 'slug',
      fieldset: 'basics',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
      description: 'Auto-generated from the title. Edit only if needed.',
    }),
    defineField({
      name: 'youtubeUrl',
      title: 'YouTube',
      type: 'url',
      fieldset: 'media',
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
      description: 'Paste a YouTube watch, shorts, or youtu.be URL.',
    }),
    defineField({
      name: 'gif',
      title: 'GIF upload',
      type: 'file',
      fieldset: 'media',
      options: {accept: 'image/gif'},
      description: 'Optional animated preview. Upload preferred.',
    }),
    defineField({
      name: 'gifUrl',
      title: 'GIF link',
      type: 'url',
      fieldset: 'media',
      description: 'Optional GIF URL if you do not upload a file.',
    }),
    defineField({
      name: 'thumbnail',
      title: 'Cover image',
      type: 'image',
      fieldset: 'media',
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
      description: 'Main image shown in the portfolio listing and detail page.',
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'text',
      fieldset: 'details',
      rows: 3,
      validation: (Rule) => Rule.max(260),
      description: 'Short summary shown under the hero section.',
    }),
    defineField({
      name: 'images',
      title: 'Gallery images',
      type: 'array',
      fieldset: 'details',
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
      title: 'Publish date',
      type: 'datetime',
      fieldset: 'publish',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
      description: 'When this item appears on the site and in the list.',
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
