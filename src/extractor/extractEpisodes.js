import { load } from 'cheerio';

export const extractEpisodes = (html) => {
  const $ = load(html);

  const response = [];
  $('.ssl-item.ep-item').each((i, el) => {
    const obj = {
      title: null,
      alternativeTitle: null,
      id: null,
      isFiller: false,
      episodeNumber: null,
    };
    obj.episodeNumber = i + 1;
    obj.title = $(el).attr('title');
    obj.id = $(el).attr('href').replace('/watch/', '').replace('?', '::');
    obj.isFiller = $(el).hasClass('ssl-item-filler');

    obj.alternativeTitle = $(el).find('.ep-name.e-dynamic-name').attr('data-jname');

    response.push(obj);
  });
  return response;
};
