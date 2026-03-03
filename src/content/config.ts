import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      publishDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      author: z.enum(['Mike', 'Christina']),
      category: z.enum(['Tracking', 'Google Ads', 'Social Ads', 'Webdesign', 'Strategie']),
      readTime: z.string(),
      cover: image().optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { blog };
