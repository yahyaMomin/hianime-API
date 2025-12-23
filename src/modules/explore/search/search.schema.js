import { createRoute, z } from '@hono/zod-openapi';
import { explorePageSchema, pageParamsSchema } from '@/modules/globalSchema/schema';
import someAnimes from '@/utils/someAnimes';

const searchSchema = createRoute({
  method: 'get',
  path: '/search',
  request: {
    query: z.object({
      keyword: z
        .string()
        .min(1, 'search term is required')
        .transform((q) => q.trim().replaceAll(' ', '+'))
        .openapi({ examples: someAnimes.keywords }),
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
  description: 'Retrieve The list Of Anime By keyword example: ?keyworld=attack+on+titan',
});

export default searchSchema;
