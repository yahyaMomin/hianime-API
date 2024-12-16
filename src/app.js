import { Hono } from "hono";
import { cors } from "hono/cors";

import hiAnimeRoutes from "./routes/routes.js";

const app = new Hono();

app.use(
  "*",
  cors({
    origin: "*", // Allow any origin
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization"],
  })
);
app.get("/", (c) => {
  c.status(200);
  return c.text(
    "welcome to anime API 🎉 start by hitting /api/v1 for documentation"
  );
});
app.get("/test", (c) => {
  return c.json({
    status: true,
  });
});
app.route("/api/v1", hiAnimeRoutes);

export default app;
