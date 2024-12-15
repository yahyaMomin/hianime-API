import { Hono } from "hono";
import {
  getActor_info,
  getCharacter_info,
  getCharacters,
  getEpisodes,
  getEpisodesInChunks,
  getHomePage,
  getInfo,
  getListPage,
  getRecommendation,
  getRelated,
  getSearchPage,
  getServers,
  home,
} from "../parser/parser";

const router = new Hono();

router.get("/", home);
router.get("/home", getHomePage);
router.get("/anime/:id", getInfo);
router.get("/animes/:query/:category?", getListPage);
router.get("/search", getSearchPage);
router.get("/recommendation/:id", getRecommendation);
router.get("/related/:id", getRelated);
router.get("/characters/:id", getCharacters);
router.get("/character/:id", getCharacter_info);
router.get("/actor/:id", getActor_info);
router.get("/episodes/:id", getEpisodes);
router.get("/servers", getServers);
// router.get("/sources", getSources);
router.get("/chunks/episodes/:id", getEpisodesInChunks);

export default router;
