import { createRoute, z } from '@hono/zod-openapi';
import someAnimes from '@/utils/someAnimes';

const schema = z.object({
  status: z.boolean(),
  data: z.array(
    z.object({
      id: z.string(),
      type: z.enum(['sub', 'dub']),
      link: z.object({
        file: z.url(),
        type: z.string(),
      }),
      tracks: z.array(
        z.object({
          file: z.url(),
          label: z.string(),
          kind: z.enum(['captions', 'thumbnails']),
          default: z.boolean(),
        })
      ),
      intro: z.object({
        start: z.number(),
        end: z.number(),
      }),
      outro: z.object({
        start: z.number(),
        end: z.number(),
      }),
      server: z.enum(someAnimes.servers),
      referer: z.string().default('https://megacloud.tv'),
    })
  ),
});
const streamSchema = createRoute({
  method: 'get',
  path: 'stream',
  request: {
    query: z.object({
      server: z.enum(['hd-1', 'hd-2', 'hd-3', 'megaplay', 'vidwish']).default('hd-1'),
      type: z.enum(['sub', 'dub']).default('sub'),
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
  description: 'Retrieve The Streaming Link Of An Anime Episode',
});

export default streamSchema;
