import { Hono } from "hono";

import hiAnimeRoutes from "./routes/hianime/routes";
import hiddenLeafRoutes from "./routes/hiddenLeaf/routes";

const app = new Hono();
app.get("/", (c) => {
   c.status(200);
   return c.text("welcome to anime API 🎉 start making call with /api/v1/hianime/home");
});
app.route("/api/v1/hianime", hiAnimeRoutes);
app.route("/api/v1/hiddenleaf", hiddenLeafRoutes);

export default app;
