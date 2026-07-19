import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const goldRates = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/gold-rates' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    faqs: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
        })
      )
      .optional(),
  }),
});

export const collections = {
  'gold-rates': goldRates,
};
