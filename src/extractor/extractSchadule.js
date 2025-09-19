import { load } from 'cheerio';

const extractSchadule = (html) => {
  const $ = load(html);

  const response = [];
  $('a').each((i, element) => {
    const obj = {
      title: null,
      alternativeTitle: null,
      id: null,
      time: null,
      episode: null,
    };

    const el = $(element);
    obj.id = el.attr('href').replace('/', '') || null;
    obj.time = el.find('.time').text() || null;
    obj.title = el.find('.film-name').text().trim() || null;
    obj.alternativeTitle = el.find('.film-name').attr('data-jname').trim() || null;
    obj.episode = Number(el.find('.btn-play').text().trim().split('Episode ').pop());

    response.push(obj);
  });
  return response;
};
export default extractSchadule;
