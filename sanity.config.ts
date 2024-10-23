import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {documentInternationalization} from '@sanity/document-internationalization'

export default defineConfig({
  name: 'default',
  title: 'Portfolio 2024',

  projectId: '8hj38m3z',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    documentInternationalization({
      supportedLanguages: [
        {id: 'en', title: 'English'},
        {id: 'fr', title: 'French'},
      ],
      schemaTypes: ['homepage', 'blog'],
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
