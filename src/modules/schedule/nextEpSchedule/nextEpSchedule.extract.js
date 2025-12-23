import { load } from 'cheerio';

export default function nextEpScheduleExtract(html) {
  const $ = load(html);

  const time = $('.schedule-alert #schedule-date').attr('data-value') || null;

  return { time };
}
