import { Hono } from 'hono';
import documentationController from '../controllers/documentation.controller';
import handler from '../utils/handler';

// controllers
import homepageController from '../controllers/homepage.controller';
import detailpageController from '../controllers/detailpage.controller';
import listpageController from '../controllers/listpage.controller';
import searchController from '../controllers/search.controller';
import suggestionController from '../controllers/suggestion.controller';
import charactersController from '../controllers/characters.controller';
import characterDetailConroller from '../controllers/characterDetail.controller';
import episodesController from '../controllers/episodes.controller';
import serversController from '../controllers/serversController';
import streamController from '../controllers/streamController';
import allGenresController from '../controllers/allGenres.controller';
import schaduleController from '../controllers/schedule.controller';
import nextEpisodeSchaduleController from '../controllers/nextEpisodeSchadule.controller';
import filterController from '../controllers/filter.controller';
import filterOptions from '../utils/filter';

const router = new Hono();

router.get('/', handler(documentationController));
router.get('/home', handler(homepageController));
router.get('/schadule', handler(schaduleController));
router.get('/schadule/next/:id', handler(nextEpisodeSchaduleController));
router.get('/anime/:id', handler(detailpageController));
router.get('/animes/:query/:category?', handler(listpageController));
router.get('/search', handler(searchController));
router.get(
  '/filter/options',
  handler(() => filterOptions)
);
router.get('/filter', handler(filterController));
router.get('/suggestion', handler(suggestionController));
router.get('/characters/:id', handler(charactersController));
router.get('/character/:id', handler(characterDetailConroller));
router.get('/episodes/:id', handler(episodesController));
router.get('/servers', handler(serversController));
router.get('/stream', handler(streamController));
router.get('/genres', handler(allGenresController));

export default router;
