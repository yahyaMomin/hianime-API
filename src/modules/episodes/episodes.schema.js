import { createRoute, z } from '@hono/zod-openapi';
import someAnimes from '@/utils/someAnimes';

const schema = z.object({
  status: z.boolean(),
  data: z.array(
    z.object({
      title: z.string(),
      alternativeTitle: z.string(),
      id: z.string(),
      isFiller: z.boolean(),
      episodeNumber: z.number(),
    })
  ),
});
const episodesSchema = createRoute({
  method: 'get',
  path: 'episodes/{id}',
  request: {
    params: z.object({
      id: z.string().openapi({
        examples: someAnimes.ids,
      }),
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
  description: 'Retrieve The list Of Episodes By ID',
});

export default episodesSchema;
