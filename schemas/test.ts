export default {
  name: 'resume',
  title: 'Resume',
  type: 'document',
  fields: [
    {
      name: 'jobExperiences',
      title: 'Job Experiences',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'jobExperience',
          fields: [
            {
              name: 'companyName',
              title: 'Company Name',
              type: 'string',
            },
            {
              name: 'jobTitle',
              title: 'Job Title',
              type: 'string',
            },
            {
              name: 'startDate',
              title: 'Start Date',
              type: 'date',
            },
            {
              name: 'endDate',
              title: 'End Date',
              type: 'date',
            },
            {
              name: 'tasks',
              title: 'Tasks',
              type: 'array',
              of: [{type: 'string'}],
            },
          ],
        },
      ],
    },
  ],
}
