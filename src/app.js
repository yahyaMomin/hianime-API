import { Hono } from "hono";

import hiAnimeRoutes from "./routes/routes.js";

const app = new Hono();
app.get("/", (c) => {
   c.status(200);
   return c.text("welcome to anime API 🎉 start by hitting /api/v1 for documentation");
});
app.route("/api/v1", hiAnimeRoutes);

export default app;
