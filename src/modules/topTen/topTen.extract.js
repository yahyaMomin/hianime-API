import { load } from 'cheerio';

export default function topTenExtract(html) {
  const $ = load(html);

  const grab = (id) => {
    const res = $('.block_area .cbox')
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

  return {
    today: grab('#top-viewed-day'),
    week: grab('#top-viewed-week'),
    month: grab('#top-viewed-month'),
  };
}
