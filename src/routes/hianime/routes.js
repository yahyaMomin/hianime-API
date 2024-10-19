import { Hono } from "hono";
import { getAzAnime, getHomePage, getInfo } from "../../parser/hianime/parser";

const router = new Hono();

router.get("/home", getHomePage);
router.get("/az-list/:category?", getAzAnime);
router.get("/:id", getInfo);

export default router;
