import { createRoute, z } from '@hono/zod-openapi';
import { AnimeWithEpisodesSchema } from '@/modules/globalSchema/schema';

const Item = z.any();
const schema = z.object({
  status: z.boolean(),
  data: AnimeWithEpisodesSchema.extend({
    rating: z.string(),
    type: z.string(),
    is18Plus: z.boolean(),
    synopsis: z.string(),
    synonyms: z.string(),
    aired: z.object({
      from: z.string(),
      to: z.string(),
    }),
    premiered: z.string(),
    duration: z.string(),
    status: z.string(),
    MAL_score: z.string(),
    genres: z.array(Item),
    studios: z.array(Item),
    producers: z.array(Item),
    related: z.array(Item),
    mostPopular: z.array(Item),
    recommended: z.array(Item),
  }),
});

const randomAnimeInfoSchema = createRoute({
  method: 'get',
  path: '/anime/random',
  responses: {
    200: {
      content: {
        'application/json': {
          schema: schema,
        },
      },
    },
  },
  description: 'Retrieve The Random Anime',
});

export default randomAnimeInfoSchema;
