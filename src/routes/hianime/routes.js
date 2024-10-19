import { Hono } from "hono";
import { getHomePage, getInfo } from "../../parser/hianime/parser";

const router = new Hono();

router.get("/home", getHomePage);
router.get("/:id", getInfo);

export default router;
