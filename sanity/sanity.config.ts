import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

const config = {
  projectId: 'l4gxqn2g',
  dataset: 'production',
  name: 'ecommerce-sanity-app',
  title: 'Sanity Ecom Studio',
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
