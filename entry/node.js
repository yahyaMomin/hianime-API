import app from '@/app';
import { serve } from '@hono/node-server';

const port = 3040;

serve({
  fetch: app.fetch,
  port,
});

console.log(`Server running on http://localhost:${port}`);
