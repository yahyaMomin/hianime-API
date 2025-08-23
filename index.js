import app from './src/app.js';
import Bun from 'bun';

Bun.serve({
  port: 3030,
  fetch: app.fetch,
});
