import app from './src/app';
import Bun from 'bun';

Bun.serve({
  port: 3030,
  fetch: app.fetch,
});

console.log(Bun.version);
