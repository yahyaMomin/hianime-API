import { load } from "cheerio";

export const extractRecommendation = (html) => {
   const $ = load(html);

   const response = [];
   $(
      ".block_area.block_area_category .tab-content .block_area-content .film_list-wrap .flw-item"
   ).each((i, el) => {
      const obj = {
         title: null,
         alternativeTitle: null,
         id: null,
         poster: null,
         type: null,
         duration: null,
         episodes: {
            sub: null,
            dub: null,
            eps: null,
         },
         rated: null,
      };
      const titleEl = $(el).find(".film-detail .film-name .dynamic-name");
      obj.title = titleEl.text();
      obj.alternativeTitle = titleEl.attr("data-jname");
      obj.id = titleEl.attr("href").split("/").pop();
      obj.type = $(el).find(".fd-infor .fdi-item").first().text();
      obj.duration = $(el).find(".fd-infor .fdi-duration").text();

      obj.poster = $(el).find(".film-poster .film-poster-img").attr("data-src");
      obj.rated = $(el).find(".film-poster .tick-rate").length
         ? $(el).find(".film-poster .tick-rate").text()
         : null;

      obj.episodes.sub = Number($(el).find(".film-poster .tick .tick-sub").text());
      obj.episodes.dub = Number($(el).find(".film-poster .tick .tick-dub").text());
      const epsEl = $(el).find(".film-poster .tick .tick-eps").length
         ? $(el).find(".film-poster .tick .tick-eps").text()
         : $(el).find(".film-poster .tick .tick-sub").text();

      obj.episodes.eps = Number(epsEl);

      response.push(obj);
   });
   return response;
};
