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
  ...EpisodesSchema.shape,
});
