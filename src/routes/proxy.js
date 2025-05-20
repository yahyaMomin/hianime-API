import { Hono } from 'hono';
import {
  imageController,
  proxyController,
  segmentController,
} from '../controllers/proxy.controller';
import handler from '../utils/handler';

const router = new Hono();

router.get('/proxy', handler(proxyController));
router.get('/segment/resource', handler(segmentController));
router.get('/image', handler(imageController));

export default router;
