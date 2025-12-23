import { createRoute, z } from '@hono/zod-openapi';
import someAnimes from '@/utils/someAnimes';

const schema = z.object({
  status: z.boolean(),
  data: z.object({
    name: z.string(),
    type: z.string(),
    japanese: z.string(),
    imageUrl: z.url(),
    bio: z.string(),
    animeApearances: z.array(
      z.object({
        title: z.string(),
        alternativeTitle: z.string(),
        id: z.string(),
        poster: z.url(),
        role: z.string(),
        type: z.string(),
      })
    ),
  }),
});

const animeCharacterSchema = createRoute({
  method: 'get',
  path: '/character/{id}',
  request: {
    params: z.object({
      id: z
        .string()
        .includes(
          'character:',
          "The 'character:' sign is Required before ID. EXAMPLE : character:mayuri-shiina-151"
        )
        .openapi({ examples: someAnimes.characterIds }),
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
  description: 'Retrieve The character Details Of An Anime Character By ID',
});

export default animeCharacterSchema;
