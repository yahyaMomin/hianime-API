import { load } from 'cheerio';

export default function charactersExtract(html) {
  const $ = load(html);

  const response = [];
  const paginationEl = $('.pre-pagination .pagination .page-item');

  let currentPage, hasNextPage, totalPages;
  if (!paginationEl.length) {
    currentPage = 1;
    hasNextPage = false;
    totalPages = 1;
  } else {
    currentPage = Number(paginationEl.find('.active .page-link').text());
    hasNextPage = !paginationEl.last().hasClass('active');
    totalPages = hasNextPage
      ? Number(paginationEl.last().find('.page-link').attr('data-url').split('page=').at(-1))
      : Number(paginationEl.last().find('.page-link').text());
  }

  const pageInfo = {
    totalPages,
    currentPage,
    hasNextPage,
  };

  const characters = $('.bac-item');
  if (!characters.length) return { response };
  $(characters).each((i, el) => {
    const obj = {
      name: null,
      id: null,
      imageUrl: null,
      role: null,
      voiceActors: [],
    };
    const characterDetail = $(el).find('.per-info').first();
    const voiceActorsDetail = $(el).find('.per-info-xx').length
      ? $(el).find('.per-info-xx')
      : $(el).find('.rtl');

    obj.name = $(characterDetail).find('.pi-detail .pi-name a').text();
    obj.role = $(characterDetail).find('.pi-detail .pi-cast').text();
    obj.id = $(characterDetail).find('.pi-avatar').length
      ? $(characterDetail).find('.pi-avatar').attr('href').replace(/^\//, '').replace('/', ':')
      : null;
    obj.imageUrl = $(characterDetail).find('.pi-avatar img').attr('data-src');

    if (!voiceActorsDetail.length) {
      response.push(obj);
      return;
    }
    const hasMultiple = $(voiceActorsDetail).hasClass('per-info-xx');

    if (hasMultiple) {
      $(voiceActorsDetail)
        .find('.pix-list a')
        .each((index, item) => {
          const innerObj = {
            name: null,
            id: null,
            imageUrl: null,
            cast: null,
          };
          innerObj.name = $(item).attr('title');
          innerObj.id = $(item).attr('href').replace(/^\//, '').replace('/', ':');
          innerObj.imageUrl = $(item).find('img').attr('data-src');

          obj.voiceActors.push(innerObj);
        });
    } else {
      const innerObj = {
        name: null,
        id: null,
        imageUrl: null,
        cast: null,
      };
      innerObj.id = $(voiceActorsDetail).find('.pi-avatar').length
        ? $(voiceActorsDetail).find('.pi-avatar').attr('href').replace(/^\//, '').replace('/', ':')
        : null;
      innerObj.imageUrl = $(voiceActorsDetail).find('.pi-avatar img').attr('data-src');
      innerObj.name = $(voiceActorsDetail).find('.pi-avatar img').attr('alt');
      innerObj.cast = $(voiceActorsDetail).find('.pi-cast').text();

      obj.voiceActors.push(innerObj);
    }

    response.push(obj);
  });
  return { pageInfo, response };
}
