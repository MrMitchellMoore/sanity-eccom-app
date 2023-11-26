import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.PROJECTID as string,
    dataset: process.env.DATASET as string,
  },
})
