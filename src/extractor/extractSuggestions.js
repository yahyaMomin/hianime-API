import { load } from 'cheerio';

export const extractSuggestions = (html) => {
  const $ = load(html);

  const response = [];
  const allEl = $('.nav-item');
  const items = allEl.splice(0, allEl.length - 2);
  $(items).each((i, el) => {
    const obj = {
      title: null,
      alternativeTitle: null,
      poster: null,
      id: null,
      aired: null,
      type: null,
      duration: null,
    };
    obj.id = $(el).attr('href').split('/').pop().split('?').at(0);
    obj.poster = $(el).find('.film-poster-img').attr('data-src') || null;
    const titleEL = $(el).find('.film-name');
    obj.title = titleEL.text() || null;
    obj.alternativeTitle = titleEL.attr('data-jname') || null;
    const infoEl = $(el).find('.film-infor');
    obj.aired = infoEl.find('span').first().text() || null;
    obj.type = infoEl
      .contents()
      .filter(function () {
        return this.type === 'text' && $(this).text().trim() !== ''; // Filter for non-empty text nodes
      })
      .text()
      .trim();
    obj.duration = infoEl.find('span').last().text() || null;

    response.push(obj);
  }).f;
  return response;
};
