import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { config } from 'dotenv';
import { rateLimiter } from 'hono-rate-limiter';
import { swaggerUI } from '@hono/swagger-ui';

import hiAnimeRoutes from './routes/routes.js';

import { AppError } from './utils/errors.js';
import { fail } from './utils/response.js';
import hianimeApiDocs from './utils/swaggerUi.js';

const app = new Hono();

config();

const origins = process.env.ORIGIN ? process.env.ORIGIN.split(',') : '*';

// third party middlewares
app.use(
  '*',
  cors({
    origin: origins,
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowHeaders: '*',
  })
);

// Apply the rate limiting middleware to all requests.
app.use(
  rateLimiter({
    windowMs: 60000, // 15 minutes
    limit: 30, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
    standardHeaders: 'draft-6', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
    keyGenerator: () => '<unique_key>', // Method to generate custom identifiers for clients.
    // store: ... , // Redis, MemoryStore, etc. See below.
  })
);

// middlewares

// routes

app.get('/', (c) => {
  c.status(200);

  return c.text('welcome to anime API 🎉 start by hitting /api/v1 for documentation');
});
app.get('/test', (c) => {
  return c.json({
    status: true,
  });
});
app.route('/api/v1', hiAnimeRoutes);

app.get('/doc', (c) => c.json(hianimeApiDocs));

// Use the middleware to serve Swagger UI at /ui
app.get('/ui', swaggerUI({ url: '/doc' }));
app.onError((err, c) => {
  if (err instanceof AppError) {
    return fail(c, err.message, err.statusCode, err.details);
  }
  console.error('unexpacted Error :' + err.message);

  return fail(c);
});

export default app;
