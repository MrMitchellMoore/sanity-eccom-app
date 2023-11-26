import ImageUrlBuilder from '@sanity/image-url'
import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_PROJECTID,
  dataset: process.env.NEXT_PUBLIC_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_APIVERSION,
  useCdn: true
})

const builder = ImageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}
