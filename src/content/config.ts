import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    author: z.enum(['Mike', 'Christina']),
    category: z.enum(['Tracking', 'Google Ads', 'Social Ads', 'Webdesign', 'Strategie']),
    readTime: z.string(),
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
