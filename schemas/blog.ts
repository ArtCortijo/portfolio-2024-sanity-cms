import {Rule} from 'sanity'

export default {
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title of blog post',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug of blog post',
      options: {source: 'title'},
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'titleImage',
      type: 'image',
      title: 'Title image of blog post',
    },
    {
      name: 'smallDescription',
      type: 'text',
      title: 'Small description of blog post',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content of blog post',
      of: [{type: 'block'}],
    },
    {
      name: 'body',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}
