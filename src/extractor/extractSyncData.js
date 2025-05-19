import { load } from 'cheerio';

export const extractSyncData = (html) => {
  const $ = load(html);
  const rawString = $('#syncData').text();

  return JSON.parse(rawString);
};

export default extractSyncData;
