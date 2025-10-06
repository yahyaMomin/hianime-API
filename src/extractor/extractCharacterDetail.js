import { load } from 'cheerio';

export const extractCharacterDetail = (html) => {
  const $ = load(html);

  const transformId = (id) => {
    return id.replace(/^\//, '').replace('/', ':');
  };

  const whoIsHe =
    $('nav .breadcrumb .active').prev().find('a').text() === 'People' ? 'people' : 'character';

  const obj = {
    name: null,
    type: null,
    japanese: null,
    imageUrl: null,
    bio: null,
  };

  obj.type = whoIsHe;
  obj.imageUrl = $('.actor-page-wrap .avatar img').attr('src');
  const allDetails = $('.apw-detail');
  obj.name = allDetails.find('.name').text();
  obj.japanese = allDetails.find('.sub-name').text();

  obj.bio = allDetails.find('.tab-content #bio .bio').html().trim();

  if (whoIsHe === 'character') {
    obj.animeAppearances = [];

    allDetails.find('.tab-content #animeography .anif-block-ul .ulclear li').each((i, el) => {
      const innerObj = {
        title: null,
        alternativeTitle: null,
        id: null,
        poster: null,
        role: null,
        type: null,
      };
      const titleEl = $(el).find('.dynamic-name');
      innerObj.title = titleEl.attr('title');
      innerObj.alternativeTitle = titleEl.attr('data-jname');
      innerObj.id = transformId(titleEl.attr('href'));

      innerObj.poster = $(el).find('.film-poster .film-poster-img').attr('src');
      innerObj.role = $(el).find('.fd-infor .fdi-item').first().text().split(' ').shift();
      innerObj.type = $(el).find('.fd-infor .fdi-item').last().text();

      obj.animeAppearances.push(innerObj);
    });

    obj.voiceActors = [];
    allDetails.find('#voiactor .sub-box-list .per-info').each((i, el) => {
      const innerObj = {
        name: null,
        imageUrl: null,
        id: null,
        language: null,
      };
      innerObj.imageUrl = $(el).find('.pi-avatar img').attr('src');
      innerObj.name = $(el).find('.pi-name a').text();
      innerObj.id = transformId($(el).find('.pi-name a').attr('href'));

      innerObj.language = $(el).find('.pi-cast').text();

      obj.voiceActors.push(innerObj);
    });
  } else {
    obj.voiceActingRoles = [];
    $('#voice .bac-list-wrap .bac-item').each((i, el) => {
      const animeInfo = $(el).find('.per-info.anime-info');
      const characterInfo = $(el).find('.per-info.rtl');

      const innerObj = {
        anime: {
          title: null,
          poster: null,
          id: null,
          typeAndYear: null,
        },
        character: {
          name: null,
          imageUrl: null,
          id: null,
          role: null,
        },
      };

      innerObj.anime.title = animeInfo.find('.pi-name a').text().trim();
      innerObj.anime.id = animeInfo.find('.pi-name a').attr('href').split('/').pop();
      innerObj.anime.poster = animeInfo.find('.pi-avatar img').attr('src');
      innerObj.anime.typeAndYear = animeInfo.find('.pi-cast').text().trim();

      innerObj.character.name = characterInfo.find('.pi-name a').text().trim();
      innerObj.character.id = transformId(characterInfo.find('.pi-name a').attr('href'));
      innerObj.character.imageUrl = characterInfo.find('.pi-avatar img').attr('src');
      innerObj.character.role = characterInfo.find('.pi-cast').text().trim();

      obj.voiceActingRoles.push(innerObj);
    });
  }

  return obj;
};
