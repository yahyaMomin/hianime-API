import app from '@/app.js';
import { serve } from 'bun';

const port = 3030;
const bunApp = serve({
  port,
  fetch: app.fetch,
  idleTimeout: 20,
});

console.log(`server is running visit ${bunApp.url}doc for docs`);
