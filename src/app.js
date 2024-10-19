import { Hono } from "hono";

import hiAnimeRoutes from "./routes/hianime/routes";
import hiddenLeafRoutes from "./routes/hiddenLeaf/routes";

const app = new Hono();
app.route("/api/v1/hianime", hiAnimeRoutes);
app.route("/api/v1/hiddenleaf", hiddenLeafRoutes);

export default app;
