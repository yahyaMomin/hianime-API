import { Scalar } from '@scalar/hono-api-reference';

export function configureDocs(app) {
  app.doc('/openapi.json', {
    openapi: '3.0.0',
    info: {
      version: '1.0.0',
      title: 'Hinaime API',
    },
  });

  app.get(
    '/doc',
    Scalar({
      url: '/openapi.json',
    })
  );
}
