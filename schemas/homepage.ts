import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title of blog post',
      // validation: (rule) => rule.required(),
    }),
    // defineField({
    //   name: 'slug',
    //   type: 'slug',
    //   title: 'Slug of blog post',
    //   options: {source: 'title'},
    // validation: (rule) => rule.required(),
    // }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published At',
      initialValue: () => new Date().toISOString(),
      // validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'introDescription',
      type: 'text',
      title: 'Intro description',
    }),
    defineField({
      name: 'skills',
      type: 'array',
      title: 'Skills',
      of: [
        defineField({
          name: 'skill',
          type: 'string',
          title: 'Skill',
        }),
      ],
    }),
    defineField({
      name: 'softSkills',
      type: 'array',
      title: 'Soft Skills',
      of: [
        defineField({
          name: 'softSkill',
          type: 'string',
          title: 'Soft Skill',
        }),
      ],
    }),
    defineField({
      name: 'education',
      type: 'array',
      title: 'Education',
      of: [
        defineField({
          type: 'object',
          name: 'educationInfo',
          fields: [
            defineField({
              name: 'program',
              type: 'string',
              title: 'Program',
            }),
            defineField({
              name: 'specialization',
              type: 'string',
              title: 'Specialization',
            }),
            defineField({
              name: 'school',
              type: 'string',
              title: 'School',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'jobExperiences',
      title: 'Job Experiences',
      type: 'array',
      of: [
        defineField({
          type: 'object',
          name: 'jobExperience',
          fields: [
            defineField({
              name: 'companyName',
              title: 'Company Name',
              type: 'string',
            }),
            defineField({
              name: 'jobTitle',
              title: 'Job Title',
              type: 'string',
            }),
            defineField({
              name: 'startDate',
              title: 'Start Date',
              type: 'date',
            }),
            defineField({
              name: 'endDate',
              title: 'End Date',
              type: 'date',
            }),
            defineField({
              name: 'tasks',
              title: 'Tasks',
              type: 'array',
              of: [{type: 'string'}],
            }),
          ],
        }),
      ],
    }),
  ],
})
