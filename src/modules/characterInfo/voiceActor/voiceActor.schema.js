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
    voiceActingRoles: z.array(
      z.object({
        title: z.string(),
        poster: z.url(),
        id: z.string(),
        typeAndYear: z.string(),
      })
    ),
  }),
});

const voiceActorSchema = createRoute({
  method: 'get',
  path: '/actor/{id}',
  request: {
    params: z.object({
      id: z
        .string()
        .includes(
          'people:',
          "The 'people:' sign is Required before ID. EXAMPLE : people:mamoru-miyano-3"
        )
        .openapi({ examples: someAnimes.voiceActorIds }),
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
  description: 'Retrieve The character Details Of An Anime VoiceActor By ID',
});

export default voiceActorSchema;
