import { createRoute, z } from '@hono/zod-openapi';
import { explorePageSchema, pageParamsSchema } from '@/modules/globalSchema/schema';

const filterSchema = createRoute({
  method: 'get',
  path: '/filter',
  request: {
    query: z.object({
      keyword: z
        .string()
        .transform((q) => q.trim().replaceAll(' ', '+'))
        .optional(),
      type: z.enum(['all', 'movie', 'tv', 'ova', 'special', 'music']).optional(),
      status: z.enum(['all', 'finished_airing', 'currently_airing', 'not_yet_aired']).optional(),
      rated: z.enum(['all', 'g', 'pg', 'pg-13', 'r', 'r+', 'rx']).optional(),
      score: z
        .enum([
          'all',
          'appalling',
          'horrible',
          'very_bad',
          'bad',
          'average',
          'fine',
          'good',
          'very_good',
          'great',
          'masterpiece',
        ])
        .optional(),
      season: z.enum(['all', 'spring', 'summer', 'fall', 'winter']).optional(),
      language: z.enum(['all', 'sub', 'dub', 'sub_dub']).optional(),
      sort: z
        .enum([
          'default',
          'recently_added',
          'recently_updated',
          'score',
          'name_az',
          'release_date',
          'most_watched',
        ])
        .optional(),
      // index 11,32,33 are empty because of  missing data-id by hianime
      genres: z
        .enum([
          'action',
          'adventure',
          'cars',
          'comedy',
          'dementia',
          'demons',
          'mystery',
          'drama',
          'ecchi',
          'fantasy',
          'game',
          'historical',
          'horror',
          'kids',
          'magic',
          'martial_arts',
          'mecha',
          'music',
          'parody',
          'samurai',
          'romance',
          'school',
          'sci-fi',
          'shoujo',
          'shoujo_ai',
          'shounen',
          'shounen_ai',
          'space',
          'sports',
          'super_power',
          'vampire',
          'harem',
          'slice_of_life',
          'supernatural',
          'military',
          'police',
          'psychological',
          'thriller',
          'seinen',
          'josei',
          'isekai',
        ])
        .optional(),
      page: pageParamsSchema,
    }),
  },
  responses: {
    200: {
      content: {
        'application/json': {
          schema: explorePageSchema,
        },
      },
    },
  },
  description: 'Retrieve The list Of Anime with filters',
});

export default filterSchema;
