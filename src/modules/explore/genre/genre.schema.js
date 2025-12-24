import { createRoute, z } from '@hono/zod-openapi';
import { genres } from '@/config/meta';
import { explorePageSchema, pageParamsSchema } from '@/modules/globalSchema/schema';

const genreSchema = createRoute({
  method: 'get',
  path: '/genre/{genre}',
  request: {
    query: z.object({
      page: pageParamsSchema,
    }),
    params: z.object({
      genre: z
        .enum(genres)
        .transform((g) => {
          const removeSpace = g.replace(' ', '-');
          const verboseFix = removeSpace === 'martial-arts' ? 'marial-arts' : removeSpace;
          return verboseFix;
        })
        .openapi({ examples: genres }),
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
  description: 'Retrieve The list Of Anime By genre example: action',
});

export default genreSchema;
