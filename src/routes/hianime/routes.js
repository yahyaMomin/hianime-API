import { Hono } from "hono";
import {
   getEpisodes,
   getHomePage,
   getInfo,
   getListPage,
   getRecommendation,
   getSearchPage,
   getServers,
   getSources,
} from "../../parser/hianime/parser";

const router = new Hono();

router.get("/", (c) => {
   return c.text("welcome to hianime API ▶︎  ");
});
router.get("/home", getHomePage);
router.get("/anime/:id", getInfo);
router.get("/animes/:query/:category?", getListPage);
router.get("/search", getSearchPage);
router.get("/recommendation/:id", getRecommendation);
router.get("/episodes/:id", getEpisodes);
router.get("/servers", getServers);
router.get("/sources", getSources);

export default router;
