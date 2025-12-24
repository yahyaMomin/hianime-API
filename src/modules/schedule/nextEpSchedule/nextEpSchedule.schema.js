import { createRoute, z } from '@hono/zod-openapi';

const schema = z.object({
  status: z.boolean(),
  data: z.object({
    time: z.string(),
  }),
});

const nextEpScheduleSchema = createRoute({
  method: 'get',
  path: '/schedule/next/{id}',
  request: {
    params: z.object({
      id: z.string().openapi({ example: 'one-piece-100' }),
    }),
  },
  responses: {
    200: {
      content: {
        'application/json': {
          schema: schema,
        },
      },
    },
  },
  description: 'Retrieve Next Episode Schedule Of An Anime By ID example: one-piece-100',
});

export default nextEpScheduleSchema;
