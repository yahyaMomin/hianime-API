const apiDocs = async (c) => {
  const proto = c.req.header('x-forwarded-proto') || c.req.url.split(':')[0];
  const host = c.req.header('x-forwarded-host') || c.req.header('host');
  const base_url = `${proto}://${host}`;

  const docs = {
    openapi: '3.0.0',
    info: {
      title: 'HiAnime API Documentation',
      version: '1.0.0',
      description: 'API documentation for HiAnime content endpoints',
    },
    servers: [
      {
        url: `${base_url}/api/v1`,
      },
    ],
    paths: {
      '/home': {
        get: {
          summary: 'Fetch homepage content',
          description:
            'Includes spotlight, top airing, trending, most popular/favorite, new added, updated, etc.',
          responses: {
            200: {
              description: 'Success',
            },
          },
        },
      },
      '/animes/az-list/{letter}': {
        get: {
          summary: 'A-Z anime list',
          parameters: [
            {
              name: 'letter',
              in: 'path',

              schema: {
                type: 'string',
                enum: [
                  'all',
                  'other',
                  '0-9',
                  'a',
                  'b',
                  'c',
                  'd',
                  'e',
                  'f',
                  'g',
                  'h',
                  'i',
                  'j',
                  'k',
                  'l',
                  'm',
                  'n',
                  'o',
                  'p',
                  'q',
                  'r',
                  's',
                  't',
                  'u',
                  'v',
                  'w',
                  'x',
                  'y',
                  'z',
                ],
              },
              description: 'Alphabet letter or special code (0-9, all, other)',
            },
            {
              name: 'page',
              in: 'query',
              schema: { type: 'integer', default: 1 },
            },
          ],
          responses: {
            200: {
              description: 'Anime A-Z list',
            },
          },
        },
      },
      '/animes/top-airing': {
        get: {
          summary: 'Top airing anime',
          parameters: [{ name: 'page', in: 'query', schema: { type: 'integer', default: 1 } }],
          responses: { 200: { description: 'Success' } },
        },
      },
      '/animes/most-popular': {
        get: {
          summary: 'Most popular anime',
          parameters: [
            { name: 'page', in: 'query', required: true, schema: { type: 'integer', default: 1 } },
          ],
          responses: { 200: { description: 'Success' } },
        },
      },
      '/animes/most-favorite': {
        get: {
          summary: 'Most favorite anime',
          parameters: [{ name: 'page', in: 'query', schema: { type: 'integer', default: 1 } }],
          responses: { 200: { description: 'Success' } },
        },
      },
      '/animes/completed': {
        get: {
          summary: 'Completed anime series',
          parameters: [{ name: 'page', in: 'query', schema: { type: 'integer', default: 1 } }],
          responses: { 200: { description: 'Success' } },
        },
      },
      '/animes/recently-added': {
        get: {
          summary: 'Recently added anime',
          parameters: [{ name: 'page', in: 'query', schema: { type: 'integer', default: 1 } }],
          responses: { 200: { description: 'Success' } },
        },
      },
      '/animes/recently-updated': {
        get: {
          summary: 'Recently updated anime',
          parameters: [{ name: 'page', in: 'query', schema: { type: 'integer', default: 1 } }],
          responses: { 200: { description: 'Success' } },
        },
      },
      '/animes/top-upcoming': {
        get: {
          summary: 'Top upcoming anime',
          parameters: [{ name: 'page', in: 'query', schema: { type: 'integer', default: 1 } }],
          responses: { 200: { description: 'Success' } },
        },
      },
      '/animes/genre/{genre}': {
        get: {
          summary: 'Anime by genre',
          parameters: [
            {
              name: 'genre',
              in: 'path',
              required: true,
              schema: {
                type: 'string',
                enum: [
                  'action',
                  'adventure',
                  'cars',
                  'comedy',
                  'dementia',
                  'demons',
                  'drama',
                  'ecchi',
                  'fantasy',
                  'game',
                  'harem',
                  'historical',
                  'horror',
                  'isekai',
                  'josei',
                  'kids',
                  'magic',
                  'martial arts',
                  'mecha',
                  'military',
                  'music',
                  'mystery',
                  'parody',
                  'police',
                  'psychological',
                  'romance',
                  'samurai',
                  'school',
                  'sci-fi',
                  'seinen',
                  'shoujo',
                  'shoujo ai',
                  'shounen',
                  'shounen ai',
                  'slice of life',
                  'space',
                  'sports',
                  'super power',
                  'supernatural',
                  'thriller',
                  'vampire',
                ],
              },
            },
            {
              name: 'page',
              in: 'query',
              schema: { type: 'integer', default: 1 },
            },
          ],
          responses: { 200: { description: 'Success' } },
        },
      },
      '/animes/subbed-anime': {
        get: {
          summary: 'Subbed anime list',
          parameters: [{ name: 'page', in: 'query', schema: { type: 'integer', default: 1 } }],
          responses: { 200: { description: 'Success' } },
        },
      },
      '/animes/dubbed-anime': {
        get: {
          summary: 'Dubbed anime list',
          parameters: [{ name: 'page', in: 'query', schema: { type: 'integer', default: 1 } }],
          responses: { 200: { description: 'Success' } },
        },
      },
      '/animes/movie': {
        get: {
          summary: 'Anime movies',
          parameters: [{ name: 'page', in: 'query', schema: { type: 'integer', default: 1 } }],
          responses: { 200: { description: 'Success' } },
        },
      },
      '/animes/tv': {
        get: {
          summary: 'Anime TV series',
          parameters: [{ name: 'page', in: 'query', schema: { type: 'integer', default: 1 } }],
          responses: { 200: { description: 'Success' } },
        },
      },
      '/animes/ova': {
        get: {
          summary: 'Anime OVAs',
          parameters: [{ name: 'page', in: 'query', schema: { type: 'integer', default: 1 } }],
          responses: { 200: { description: 'Success' } },
        },
      },
      '/animes/ona': {
        get: {
          summary: 'Anime ONAs',
          parameters: [{ name: 'page', in: 'query', schema: { type: 'integer', default: 1 } }],
          responses: { 200: { description: 'Success' } },
        },
      },
      '/animes/special': {
        get: {
          summary: 'Anime Specials',
          parameters: [{ name: 'page', in: 'query', schema: { type: 'integer', default: 1 } }],
          responses: { 200: { description: 'Success' } },
        },
      },
      '/animes/events': {
        get: {
          summary: 'Anime Events',
          parameters: [{ name: 'page', in: 'query', schema: { type: 'integer', default: 1 } }],
          responses: { 200: { description: 'Success' } },
        },
      },
      '/anime/{id}': {
        get: {
          summary: 'Anime detail by ID',
          parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'string' } }],
          responses: { 200: { description: 'Success' } },
        },
      },
      '/search': {
        get: {
          summary: 'Search anime',
          parameters: [
            { name: 'keyword', in: 'query', required: true, schema: { type: 'string' } },
            { name: 'page', in: 'query', schema: { type: 'integer', default: 1 } },
          ],
          responses: { 200: { description: 'Success' } },
        },
      },
      '/filter': {
        get: {
          summary: 'filter anime',
          parameters: [
            { name: 'keyword', in: 'query', schema: { type: 'string' } },
            { name: 'page', in: 'query', schema: { type: 'integer', default: 1 } },

            {
              name: 'genres',
              in: 'query',
              required: false,
              schema: {
                type: 'string',
                enum: [
                  'action',
                  'adventure',
                  'cars',
                  'comedy',
                  'dementia',
                  'demons',
                  'mystery',
                  'drama',
                  'ecchi',
                  'fantasy',
                  'game',
                  'historical',
                  'horror',
                  'kids',
                  'magic',
                  'martial_arts',
                  'mecha',
                  'music',
                  'parody',
                  'samurai',
                  'romance',
                  'school',
                  'sci-fi',
                  'shoujo',
                  'shoujo_ai',
                  'shounen',
                  'shounen_ai',
                  'space',
                  'sports',
                  'super_power',
                  'vampire',
                  'harem',
                  'slice_of_life',
                  'supernatural',
                  'military',
                  'police',
                  'psychological',
                  'thriller',
                  'seinen',
                  'josei',
                  'isekai',
                ],
              },
            },
            {
              name: 'type',
              in: 'query',
              required: false,
              schema: { type: 'string', enum: ['all', 'movie', 'tv', 'ova', 'special', 'music'] },
            },
            {
              name: 'status',
              in: 'query',
              required: false,
              schema: {
                type: 'string',
                enum: ['all', 'finished_airing', 'currently_airing', 'not_yet_aired'],
              },
            },
            {
              name: 'rated',
              in: 'query',
              required: false,
              schema: { type: 'string', enum: ['all', 'g', 'pg', 'pg-13', 'r', 'r+', 'rx'] },
            },
            {
              name: 'score',
              in: 'query',
              required: false,
              schema: {
                type: 'string',
                enum: [
                  'all',
                  'appalling',
                  'horrible',
                  'very_bad',
                  'bad',
                  'average',
                  'fine',
                  'good',
                  'very_good',
                  'great',
                  'masterpiece',
                ],
              },
            },
            {
              name: 'season',
              in: 'query',
              required: false,
              schema: { type: 'string', enum: ['all', 'spring', 'summer', 'fall', 'winter'] },
            },
            {
              name: 'language',
              in: 'query',
              required: false,
              schema: { type: 'string', enum: ['all', 'sub', 'dub', 'sub_dub'] },
            },
          ],
          responses: { 200: { description: 'Success' } },
        },
      },
      '/suggestion': {
        get: {
          summary: 'Search suggestions',
          parameters: [
            { name: 'keyword', in: 'query', required: true, schema: { type: 'string' } },
            { name: 'page', in: 'query', schema: { type: 'integer', default: 1 } },
          ],
          responses: { 200: { description: 'Success' } },
        },
      },
      '/characters/{id}': {
        get: {
          summary: 'Anime characters by ID',
          parameters: [
            { name: 'id', in: 'path', required: true, schema: { type: 'string' } },
            { name: 'page', in: 'query', schema: { type: 'integer', default: 1 } },
          ],
          responses: { 200: { description: 'Success' } },
        },
      },
      '/character/{id}': {
        get: {
          summary: 'Character or actor detail',
          parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'string' } }],
          responses: { 200: { description: 'Success' } },
        },
      },
      '/episodes/{id}': {
        get: {
          summary: 'Episodes by anime ID',
          parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'string' } }],
          responses: { 200: { description: 'Success' } },
        },
      },
      '/servers': {
        get: {
          summary: 'Episode servers',
          parameters: [{ name: 'id', in: 'query', required: true, schema: { type: 'string' } }],
          responses: { 200: { description: 'Success' } },
        },
      },
      '/stream': {
        get: {
          summary: 'Stream episode',
          parameters: [
            { name: 'id', in: 'query', required: true, schema: { type: 'string' } },
            { name: 'type', in: 'query', schema: { type: 'string', default: 'sub' } },
            { name: 'server', in: 'query', schema: { type: 'string', default: 'hd-2' } },
          ],
          responses: { 200: { description: 'Success' } },
        },
      },
    },
  };

  return c.json(docs);
};

export default apiDocs;
