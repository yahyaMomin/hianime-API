import { createRouter } from '../lib/create-app';

import * as home from '../modules/home/index';
import * as spotlight from '../modules/spotlight/index';
import * as topTen from '../modules/topTen/index';
import * as animeInfo from '../modules/info/animeInfo/index';
import * as randomAnimeInfo from '../modules/info/randomAnimeInfo/index';
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
import * as stream from '../modules/stream/index';
import * as monthlySchedule from '../modules/schedule/monthlySchedule/index';
import * as nextEpSchedule from '../modules/schedule/nextEpSchedule/index';
import * as meta from '../modules/meta/index';
import withTryCatch from '@/utils/withTryCatch';

const router = createRouter();

const routes = [
  home,
  spotlight,
  topTen,
  animeInfo,
  randomAnimeInfo,
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
  stream,
  monthlySchedule,
  nextEpSchedule,
  meta,
  explore,
];

routes.forEach((route) => {
  router.openapi(route.schema, withTryCatch(route.handler));
});

export default router;
