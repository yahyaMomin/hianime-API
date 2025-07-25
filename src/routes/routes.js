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

const router = new Hono();

router.get('/', handler(documentationController));
router.get('/home', handler(homepageController));
router.get('/anime/:id', handler(detailpageController));
router.get('/animes/:query/:category?', handler(listpageController));
router.get('/search', handler(searchController));
router.get('/suggestion', handler(suggestionController));
router.get('/characters/:id', handler(charactersController));
router.get('/character/:id', handler(characterDetailConroller));
router.get('/episodes/:id', handler(episodesController));
router.get('/servers', handler(serversController));
router.get('/stream', handler(streamController));
router.get('/genres', handler(allGenresController));
router.get('/*', (c) => {
  return c.html(`
        <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>
      bro please stop using unnececery resources by making request to the
      endpoints which is not even exist
    </h1>
    <p>if you want anything you can contact me here :</p>
    <a href="https://t.me/Mst83din">here</a>
  </body>
</html>

    `);
});

export default router;
