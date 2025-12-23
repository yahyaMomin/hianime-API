import z from 'zod';

export const EpisodesSchema = z.object({
  sub: z.number(),
  dub: z.number(),
  eps: z.number(),
});

export const BasicAnimeSchema = z.object({
  title: z.string(),
  alternativeTitle: z.string(),
  id: z.string(),
  poster: z.url(),
});

export const AnimeWithEpisodesSchema = z.object({
  ...BasicAnimeSchema.shape,
  episodes: z.object({ ...EpisodesSchema.shape }),
});

export const pageInfoSchema = z.object({
  currentPage: z.number().default(1),
  hasNextPage: z.boolean().default(false),
  totalPages: z.number().default(1),
});

export const explorePageSchema = z.object({
  status: z.boolean(),
  data: z.object({
    pageInfo: pageInfoSchema,
    response: z.array(
      AnimeWithEpisodesSchema.extend({
        type: z.string(),
        duration: z.string(),
      })
    ),
  }),
});

export const pageParamsSchema = z.coerce.number().default(1).openapi({ example: 1 });
