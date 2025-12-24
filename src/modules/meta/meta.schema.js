import { createRoute, z } from '@hono/zod-openapi';

const schema = z.object({
  status: z.boolean(),
  data: z.object({
    genres: z.array(z.string()),
    azList: z.array(z.string()),
    exploreRoutes: z.array(z.string()),
    filterOptions: z.object({
      type: z.array(z.string()),
      status: z.array(z.string()),
      rated: z.array(z.string()),
      score: z.array(z.string()),
      season: z.array(z.string()),
      language: z.array(z.string()),
      sort: z.array(z.string()),
      genres: z.array(z.string()),
    }),
  }),
});

const metaSchema = createRoute({
  method: 'get',
  path: '/meta',
  responses: {
    200: {
      content: {
        'application/json': {
          schema: schema,
        },
      },
    },
  },
  description: 'meta information',
});

export default metaSchema;
