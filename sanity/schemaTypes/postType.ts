import {defineArrayMember, defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fieldsets: [
    {
      name: 'basics',
      title: 'Basics',
    },
    {
      name: 'meta',
      title: 'Meta',
      description: 'Short info shown in the Newsroom list and cards.',
    },
    {
      name: 'media',
      title: 'Media',
    },
    {
      name: 'content',
      title: 'Content',
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
      name: 'publishedAt',
      title: 'Publish date',
      type: 'datetime',
      fieldset: 'publish',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
      description: 'When this post appears on the site and in the list.',
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      fieldset: 'meta',
      rows: 3,
      validation: (Rule) => Rule.max(220),
      description: 'Short summary shown on the Newsroom listing.',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      fieldset: 'meta',
      options: {
        list: [
          {title: 'Corporate', value: 'corporate'},
          {title: 'Partnerships', value: 'partnerships'},
          {title: 'Activities', value: 'activities'},
          {title: 'Thought Leadership', value: 'thought-leadership'},
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
      initialValue: 'corporate',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      fieldset: 'media',
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
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      fieldset: 'content',
      of: [
        defineArrayMember({type: 'block'}),
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
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'publishedAt',
      media: 'mainImage',
    },
    prepare(selection) {
      const {title, subtitle, media} = selection
      return {
        title,
        subtitle: subtitle ? `Published ${new Date(subtitle).toLocaleDateString()}` : 'Unscheduled',
        media,
      }
    },
  },
})