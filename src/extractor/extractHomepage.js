import * as cheerio from 'cheerio';

export const extractHomepage = (html) => {
  const $ = cheerio.load(html);

  const response = {
    spotlight: [],
    trending: [],
    topAiring: [],
    mostPopular: [],
    mostFavorite: [],
    latestCompleted: [],
    latestEpisode: [],
    newAdded: [],
    topUpcoming: [],
    top10: {
      today: null,
      week: null,
      month: null,
    },
    genres: [],
  };

  const $spotlight = $('.deslide-wrap .swiper-wrapper .swiper-slide');
  const $trending = $('#trending-home .swiper-container .swiper-slide');
  const $featured = $('#anime-featured .anif-blocks .row .anif-block');
  const $home = $('.block_area.block_area_home');
  const $top10 = $('.block_area .cbox');
  const $genres = $('.sb-genre-list');

  $($spotlight).each((i, el) => {
    const obj = {
      title: null,
      alternativeTitle: null,
      id: null,
      poster: null,
      rank: null,
      type: null,
      quality: null,
      duration: null,
      aired: null,
      synopsis: null,
      episodes: {
        sub: null,
        dub: null,
        eps: null,
      },
    };
    obj.rank = i + 1;
    obj.id = $(el).find('.desi-buttons a').first().attr('href').split('/').at(-1);
    obj.poster = $(el).find('.deslide-cover .film-poster-img').attr('data-src');

    const titles = $(el).find('.desi-head-title');
    obj.title = titles.text();
    obj.alternativeTitle = titles.attr('data-jname');

    obj.synopsis = $(el).find('.desi-description').text().trim();

    const details = $(el).find('.sc-detail');
    obj.type = details.find('.scd-item').eq(0).text().trim(); // Grabs 'TV'
    obj.duration = details.find('.scd-item').eq(1).text().trim(); // Grabs '24m'
    obj.aired = details.find('.scd-item.m-hide').text().trim(); // Grabs 'Oct 20, 1999'
    obj.quality = details.find('.scd-item .quality').text().trim(); // Grabs 'HD'

    obj.episodes.sub = Number(details.find('.tick-sub').text().trim()); // Grabs '1122'
    obj.episodes.dub = Number(details.find('.tick-dub').text().trim()); // Grabs '1096'

    const epsText = details.find('.tick-eps').length
      ? details.find('.tick-eps').text().trim()
      : details.find('.tick-sub').text().trim();
    obj.episodes.eps = Number(epsText);

    response.spotlight.push(obj);
  });
  $($trending).each((i, el) => {
    const obj = {
      title: null,
      alternativeTitle: null,
      rank: null,
      poster: null,
      id: null,
    };

    const titleEl = $(el).find('.item .film-title');
    obj.title = titleEl.text();
    obj.alternativeTitle = titleEl.attr('data-jname');

    obj.rank = i + 1;

    const imageEl = $(el).find('.film-poster');

    obj.poster = imageEl.find('img').attr('data-src');
    obj.id = imageEl.attr('href').split('/').at(-1);

    response.trending.push(obj);
  });

  $($featured).each((i, el) => {
    const data = $(el)
      .find('.anif-block-ul ul li')
      .map((index, item) => {
        const obj = {
          title: null,
          alternativeTitle: null,
          id: null,
          poster: null,
          type: null,
          episodes: {
            sub: null,
            dub: null,
            eps: null,
          },
        };
        const titleEl = $(item).find('.film-detail .film-name a');
        obj.title = titleEl.attr('title');
        obj.alternativeTitle = titleEl.attr('data-jname');
        obj.id = titleEl.attr('href').split('/').at(-1);

        obj.poster = $(item).find('.film-poster .film-poster-img').attr('data-src');
        obj.type = $(item).find('.fd-infor .fdi-item').text();

        obj.episodes.sub = Number($(item).find('.fd-infor .tick-sub').text());
        obj.episodes.dub = Number($(item).find('.fd-infor .tick-dub').text());

        const epsText = $(item).find('.fd-infor .tick-eps').length
          ? $(item).find('.fd-infor .tick-eps').text()
          : $(item).find('.fd-infor .tick-sub').text();

        obj.episodes.eps = Number(epsText);

        return obj;
      })
      .get();

    const dataType = $(el).find('.anif-block-header').text().replace(/\s+/g, '');
    const normalizedDataType = dataType.charAt(0).toLowerCase() + dataType.slice(1);

    response[normalizedDataType] = data;
  });

  $($home).each((i, el) => {
    const data = $(el)
      .find('.tab-content .film_list-wrap .flw-item')
      .map((index, item) => {
        const obj = {
          title: null,
          alternativeTitle: null,
          id: null,
          poster: null,
          episodes: {
            sub: null,
            dub: null,
            eps: null,
          },
        };
        const titleEl = $(item).find('.film-detail .film-name .dynamic-name');
        obj.title = titleEl.attr('title');
        obj.alternativeTitle = titleEl.attr('data-jname');
        obj.id = titleEl.attr('href').split('/').at(-1);

        obj.poster = $(item).find('.film-poster img').attr('data-src');

        const episodesEl = $(item).find('.film-poster .tick');
        obj.episodes.sub = Number($(episodesEl).find('.tick-sub').text());
        obj.episodes.dub = Number($(episodesEl).find('.tick-dub').text());

        const epsText = $(episodesEl).find('.tick-eps').length
          ? $(episodesEl).find('.tick-eps').text()
          : $(episodesEl).find('.tick-sub').text();

        obj.episodes.eps = Number(epsText);

        return obj;
      })
      .get();

    const dataType = $(el).find('.cat-heading').text().replace(/\s+/g, '');
    const normalizedDataType = dataType.charAt(0).toLowerCase() + dataType.slice(1);

    normalizedDataType === 'newOnHiAnime'
      ? (response.newAdded = data)
      : (response[normalizedDataType] = data);
  });

  const extractTopTen = (id) => {
    const res = $top10
      .find(`${id} ul li`)
      .map((i, el) => {
        const obj = {
          title: $(el).find('.film-name a').text() || null,
          rank: i + 1,
          alternativeTitle: $(el).find('.film-name a').attr('data-jname') || null,
          id: $(el).find('.film-name a').attr('href').split('/').pop() || null,
          poster: $(el).find('.film-poster img').attr('data-src') || null,
          episodes: {
            sub: Number($(el).find('.tick-item.tick-sub').text()),
            dub: Number($(el).find('.tick-item.tick-dub').text()),
            eps: $(el).find('.tick-item.tick-eps').length
              ? Number($(el).find('.tick-item.tick-eps').text())
              : Number($(el).find('.tick-item.tick-sub').text()),
          },
        };
        return obj;
      })
      .get();
    return res;
  };

  response.top10.today = extractTopTen('#top-viewed-day');
  response.top10.week = extractTopTen('#top-viewed-week');
  response.top10.month = extractTopTen('#top-viewed-month');
  $($genres)
    .find('li')
    .each((i, el) => {
      const genre = $(el).find('a').attr('title').toLocaleLowerCase();
      response.genres.push(genre);
    });
  return response;
};
