import createApp from './lib/create-app.js';
import { configureDocs } from './lib/configure-docs.js';
import router from './routes/routes.js';
import { config } from 'dotenv';

config();

const app = createApp();

configureDocs(app);

app.route('/api/v1', router);

export default app;
