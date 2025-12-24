import { createRoute, z } from '@hono/zod-openapi';
import { exploreRoutes } from '@/config/meta';
import { explorePageSchema, pageParamsSchema } from '../globalSchema/schema';

const exploreSchema = createRoute({
  method: 'get',
  path: '/{query}',
  request: {
    query: z.object({
      page: pageParamsSchema,
    }),
    params: z.object({
      query: z.enum(exploreRoutes).openapi({
        param: {
          examples: exploreRoutes,
        },
      }),
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
  description: 'Retrieve The list Of Anime By Query example: top-airing',
});

export default exploreSchema;
