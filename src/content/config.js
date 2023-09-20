import { defineCollection, z } from 'astro:content'

const entries = defineCollection({
  schema: z.object({
    title: z.string(),
    day: z.number(),
    date: z.string()
  })
})

const content = defineCollection({
  schema: z.object({
    title: z.string()
  })
})

export const collections = { entries, content }
