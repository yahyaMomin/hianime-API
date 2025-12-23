import { createRouter } from '../lib/create-app';

import handler from '../utils/handler';

//  controllers
// import homepageController from '../controllers/homepage.controller';
// import detailpageController from '../controllers/detailpage.controller';
// import listpageController from '../controllers/listpage.controller';
// import searchController from '../controllers/search.controller';
// import suggestionController from '../controllers/suggestion.controller';
// import charactersController from '../controllers/characters.controller';
// import characterDetailConroller from '../controllers/characterDetail.controller';
// import episodesController from '../controllers/episodes.controller';
// import serversController from '../controllers/serversController';
// import streamController from '../controllers/streamController';
// import allGenresController from '../controllers/allGenres.controller';
// import nextEpisodeSchaduleController from '../controllers/nextEpisodeSchadule.controller';
// import filterController from '../controllers/filter.controller';
// import filterOptions from '../utils/filter';
// import { detailSchema, homeSchema, nextEpScheduleSchema, scheduleSchema } from './schemas';
// import scheduleController from '../controllers/schedule.controller';
// import nextEpScheduleController from '../controllers/nextEpisodeSchadule.controller';

import * as home from '../modules/home/index';
import * as spotlight from '../modules/spotlight/index';
import * as topTen from '../modules/topTen/index';
import * as detail from '../modules/detail/index';
import * as explore from '../modules/explore/index';
import * as search from '../modules/explore/search/index';
import * as suggestion from '../modules/suggestion/index';
import * as characters from '../modules/characters/index';
import * as animeCharacter from '../modules/characterInfo/animeCharacter/index';
import * as voiceActor from '../modules/characterInfo/voiceActor/index';
import * as genre from '../modules/explore/genre/index';
import * as azList from '../modules/explore/az-list/index';
import * as filter from '../modules/explore/filter/index';
import * as episodes from '../modules/episodes/index';
import * as servers from '../modules/servers/index';
import * as monthlySchedule from '../modules/schedule/monthlySchedule/index';
import * as nextEpSchedule from '../modules/schedule/nextEpSchedule/index';

const router = createRouter();

const routes = [
  home,
  spotlight,
  topTen,
  detail,
  search,
  suggestion,
  characters,
  animeCharacter,
  voiceActor,
  genre,
  azList,
  filter,
  episodes,
  servers,
  monthlySchedule,
  nextEpSchedule,
  explore,
];

routes.forEach((route) => {
  router.openapi(route.schema, handler(route.handler));
});

// router.openapi(
//   '/filter/options',
//   handler(() => filterOptions)
// );

// router.openapi('/servers', handler(serversController));
// router.openapi('/stream', handler(streamController));
// router.openapi('/genres', handler(allGenresController));

export default router;
