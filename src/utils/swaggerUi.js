const base_url = process.env.BASE_URL ? process.env.BASE_URL : 'http://localhost:3030';

const hianimeApiDocs = {
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
            required: true,
            schema: { type: 'string' },
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
            schema: { type: 'string' },
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

export default hianimeApiDocs;
