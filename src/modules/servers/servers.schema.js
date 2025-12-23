import { createRoute, z } from '@hono/zod-openapi';
import someAnimes from '@/utils/someAnimes';

const schema = z.object({
  status: z.boolean(),
  data: z.object({
    episode: z.number(),
    sub: z.array(
      z.object({
        index: z.number(),
        type: z.enum(['sub', 'dub']),
        id: z.number(),
        name: z.enum(['HD-1', 'HD-2', 'HD-3']),
      })
    ),
    dub: z.array(
      z.object({
        index: z.number(),
        type: z.enum(['sub', 'dub']),
        id: z.number(),
        name: z.enum(['HD-1', 'HD-2', 'HD-3']),
      })
    ),
  }),
});

const serversSchema = createRoute({
  method: 'get',
  path: '/servers/{id}',
  request: {
    params: z.object({
      id: z.string().openapi({ examples: someAnimes.episodesIds }),
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
  description: 'Retrieve The Servers Of An Episode',
});

export default serversSchema;
