import { createRoute, z } from '@hono/zod-openapi';
import { pageInfoSchema, pageParamsSchema } from '../globalSchema/schema';
import someAnimes from '@/utils/someAnimes';

const schema = z.object({
  status: z.boolean(),
  data: z.object({
    pageInfo: pageInfoSchema,
    response: z.array(
      z.object({
        name: z.string(),
        id: z.string(),
        imageUrl: z.url(),
        role: z.string(),
        voiceActors: z.array(
          z.object({
            name: z.string(),
            id: z.string(),
            imageUrl: z.string(),
            cast: z.string().nullable(),
          })
        ),
      })
    ),
  }),
});

const charactersSchema = createRoute({
  method: 'get',
  path: '/characters/{id}',
  request: {
    query: z.object({
      page: pageParamsSchema,
    }),
    params: z.object({
      id: z.string().openapi({ examples: someAnimes.ids }),
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
  description: 'Retrieve The characters Of An Anime By ID',
});

export default charactersSchema;
