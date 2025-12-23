import app from '@/app.js';
import { serve } from 'bun';

const bunApp = serve({
  port: 3030,
  fetch: app.fetch,
});

console.log(`server is started goto ${bunApp.url}doc`);
