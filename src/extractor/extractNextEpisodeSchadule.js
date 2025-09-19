import { load } from 'cheerio';

const extractNextEpisodeSchadule = (html) => {
  const $ = load(html);

  const time = $('.schedule-alert #schedule-date').attr('data-value') || null;

  return { time };
};

export default extractNextEpisodeSchadule;
