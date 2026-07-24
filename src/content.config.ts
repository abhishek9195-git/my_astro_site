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

const goldFAQ = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/gold-faq' }),
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

const goldProsCons = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/gold-pros-cons' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    items: z.array(
      z.object({
        carat: z.string(),
        pros: z.array(z.string()),
        cons: z.array(z.string()),
      })
    ),
  }),
});

export const collections = {
  'gold-rates': goldRates,
  'gold-faq': goldFAQ,
  "gold-pros-cons": goldProsCons,
};
