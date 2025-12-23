import { OpenAPIHono } from '@hono/zod-openapi';
import { rateLimiter } from 'hono-rate-limiter';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import { fail } from '../utils/response';
import { AppError } from '../utils/errors';
import zodValidationHook from '@/middlewares/hook';

export function createRouter() {
  return new OpenAPIHono({
    defaultHook: zodValidationHook,
    strict: false,
  });
}

export default function createApp() {
  const origins = process.env.ORIGIN ? process.env.ORIGIN.split(',') : '*';

  const corsConf = cors({
    origin: origins,
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowHeaders: '*',
  });
  const rateLimiterConf = rateLimiter({
    windowMs: process.env.RATE_LIMIT_WINDOW_MS || 60 * 1000,
    limit: process.env.RATE_LIMIT_LIMIT || 20,
    standardHeaders: 'draft-6', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
    keyGenerator: (c) => {
      const ip = (c.req.header('x-forwarded-for') || '').split(',')[0].trim();
      return ip;
    },
  });

  const app = createRouter()
    .use(corsConf)
    .use(rateLimiterConf)
    .use('/api/v1/*', logger())
    .get('/', (c) => c.text('welcome to anime API 🎉 goto /ui for docs'))
    .get('/ping', (c) => c.text('pong'))
    .notFound((c) => fail(c, 'page not found', 404))
    .onError((err, c) => {
      if (err instanceof AppError) {
        return fail(c, err.message, err.statusCode, err.details);
      }
      console.error('unexpacted Error :' + err.message);
      return fail(c);
    });

  return app;
}
