import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const caseStudies = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/case-studies" }),
  schema: z.object({
    company: z.string(),
    headline: z.string(),
    outcome: z.string(),
    metrics: z.array(
      z.object({
        value: z.string(),
        label: z.string(),
      }),
    ),
    industry: z.string().optional(),
    teamSize: z.coerce.string().optional(),
    geography: z.string().optional(),
    engagementLength: z.string().optional(),
    services: z.array(z.string()).optional(),
    publishedAt: z.coerce.date(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { caseStudies };
