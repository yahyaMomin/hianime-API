import { createRoute, z } from '@hono/zod-openapi';
import { AnimeWithEpisodesSchema, BasicAnimeSchema } from './shared.schema';

const Item = z.any();

const schema = z.object({
  status: z.boolean(),
  data: z.object({
    spotlight: z.array(
      AnimeWithEpisodesSchema.extend({
        rank: z.number(),
        type: z.string(),
        quality: z.string(),
        duration: z.string(),
        aired: z.string(),
        synopsis: z.string(),
      })
    ),
    trending: z.array(
      BasicAnimeSchema.extend({
        rank: z.number(),
      })
    ),
    topAiring: z.array(
      AnimeWithEpisodesSchema.extend({
        type: z.string(),
      })
    ),
    mostPopular: z.array(
      AnimeWithEpisodesSchema.extend({
        type: z.string(),
      })
    ),
    mostFavorite: z.array(
      AnimeWithEpisodesSchema.extend({
        type: z.string(),
      })
    ),
    latestCompleted: z.array(
      AnimeWithEpisodesSchema.extend({
        type: z.string(),
      })
    ),
    latestEpisode: z.array(AnimeWithEpisodesSchema),
    newAdded: z.array(AnimeWithEpisodesSchema),
    topUpcoming: z.array(AnimeWithEpisodesSchema),
    top10: z.object({
      today: z.array(AnimeWithEpisodesSchema),
      week: z.array(AnimeWithEpisodesSchema),
      month: z.array(AnimeWithEpisodesSchema),
    }),
    genres: z.array(Item),
  }),
});

export const homeSchema = createRoute({
  method: 'get',
  path: '/home',
  responses: {
    200: {
      content: {
        'application/json': {
          schema: schema,
        },
      },
    },
  },
  description: 'Retrieve The HomePage Data',
});
