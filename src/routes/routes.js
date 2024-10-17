import { Hono } from "hono";
import { getHomePage } from "../parser/parser";

const routes = new Hono();

routes.get("/home", getHomePage);

export default routes;
