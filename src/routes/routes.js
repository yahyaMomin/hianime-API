import { Hono } from "hono";
import { getSpotlight, getTrending } from "../parser/parser";

const routes = new Hono();

routes.get("/spotlight", getSpotlight);
routes.get("/trending", getTrending);

export default routes;
