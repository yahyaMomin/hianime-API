import { Hono } from "hono";
import { getHomePage, getInfo, getListPage, getSearchPage } from "../../parser/hianime/parser";

const router = new Hono();

router.get("/", (c) => {
   return c.text("welcome to hianime API ▶︎  ");
});
router.get("/home", getHomePage);
router.get("/info/:id", getInfo);
router.get("/all/:query/:category?", getListPage);
router.get("/search", getSearchPage);

export default router;
