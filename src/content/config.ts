import { defineCollection, z } from 'astro:content';

const goldRates = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
  }),
});

export const collections = {
  'gold-rates': goldRates,
};
