import z from 'zod';
import { AnimeWithEpisodesSchema } from '@/modules/globalSchema/schema';
import { createRoute } from '@hono/zod-openapi';

const schema = z.object({
  status: z.boolean(),
  data: z.object({
    today: z.array(AnimeWithEpisodesSchema),
    week: z.array(AnimeWithEpisodesSchema),
    month: z.array(AnimeWithEpisodesSchema),
  }),
});

const topTenSchema = createRoute({
  method: 'get',
  path: '/topten',
  responses: {
    200: {
      content: {
        'application/json': {
          schema: schema,
        },
      },
    },
  },
});

export default topTenSchema;
