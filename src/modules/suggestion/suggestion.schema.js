import { createRoute, z } from '@hono/zod-openapi';
import { BasicAnimeSchema } from '../globalSchema/schema';
import someAnimes from '@/utils/someAnimes';

const schema = z.object({
  status: z.boolean(),
  data: z.array(
    BasicAnimeSchema.extend({
      aired: z.string(),
      type: z.string(),
      duration: z.string(),
    })
  ),
});

const suggestionSchema = createRoute({
  method: 'get',
  path: '/suggestion',
  request: {
    query: z.object({
      keyword: z
        .string()
        .min(1, 'string cannot be empty')
        .transform((k) => k.trim().replaceAll(' ', '+'))
        .openapi({ examples: someAnimes.keywords }),
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
  description: 'Retrieve The Search Suggestions by keywords',
});

export default suggestionSchema;
