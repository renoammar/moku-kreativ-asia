import {defineField, defineType} from 'sanity'

const youtubeRegex =
  /^(https?:\/\/)?(www\.)?(youtube\.com\/(watch\?v=|shorts\/)|youtu\.be\/)[\w-]{6,}/i

export const portfolioType = defineType({
  name: 'portfolio',
  title: 'Portfolio Video',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().max(120),
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
      title: 'Thumbnail',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
      description: 'Cover image shown before the video is played.',
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
      subtitle: 'youtubeUrl',
    },
  },
})
