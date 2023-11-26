import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

const config = {
  projectId: (process.env.PROJECTID as string) || 'l4gxqn2g',
  dataset: (process.env.DATASET as string) || 'production',
  name: process.env.NEXT_PUBLIC_NAME as string,
  title: process.env.NEXT_PUBLIC_TITLE as string,
}

export default defineConfig({
  name: config.name,
  title: config.title,
  projectId: config.projectId,
  dataset: config.dataset,
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
