import { createRoute, z } from '@hono/zod-openapi';

const schema = z.object({
  status: z.boolean(),
  data: z.object({
    meta: z.object({
      date: z.date(),
      currentDate: z.date(),
      lastDate: z.date(),
    }),
    response: z.array(
      z.object({
        title: z.string(),
        alternativeTitle: z.string(),
        id: z.string(),
        time: z.string(),
        episode: z.number(),
      })
    ),
  }),
});

export const scheduleSchema = createRoute({
  method: 'get',
  path: '/schedule',
  request: {
    query: z.object({
      date: z.string(),
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
  description: 'Retrieve Schedule Anime By Date example: ?date=21. Default is CurrentDate',
});
