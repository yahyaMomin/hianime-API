import * as cheerio from "cheerio";

export const extractSpotlight = (html) => {
   const $ = cheerio.load(html);

   const response = [];

   $(".deslide-wrap .swiper-wrapper .swiper-slide").each((i, el) => {
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
      obj.id = $(el).find(".desi-buttons a").first().attr("href").split("/").at(-1);
      obj.poster = $(el).find(".deslide-cover .film-poster-img").attr("data-src");

      const titles = $(el).find(".desi-head-title");
      obj.title = titles.text();
      obj.alternativeTitle = titles.attr("data-jname");

      obj.synopsis = $(el).find(".desi-description").text().trim();

      const details = $(el).find(".sc-detail");
      obj.type = details.find(".scd-item").eq(0).text().trim(); // Grabs 'TV'
      obj.duration = details.find(".scd-item").eq(1).text().trim(); // Grabs '24m'
      obj.aired = details.find(".scd-item.m-hide").text().trim(); // Grabs 'Oct 20, 1999'
      obj.quality = details.find(".scd-item .quality").text().trim(); // Grabs 'HD'

      obj.episodes.sub = Number(details.find(".tick-sub").text().trim()); // Grabs '1122'
      obj.episodes.dub = Number(details.find(".tick-dub").text().trim()); // Grabs '1096'

      const epsText = details.find(".tick-eps").length
         ? details.find(".tick-eps").text().trim()
         : details.find(".tick-sub").text().trim();
      obj.episodes.eps = Number(epsText);

      response.push(obj);
   });

   return response;
};

export const extractTrending = (html) => {
   const $ = cheerio.load(html);

   const response = [];

   $("#trending-home .swiper-container .swiper-slide").each((i, el) => {
      const obj = {
         title: null,
         alternativeTitle: null,
         rank: null,
         poster: null,
         id: null,
      };

      const titleEl = $(el).find(".item .film-title");
      obj.title = titleEl.text();
      obj.alternativeTitle = titleEl.attr("data-jname");

      obj.rank = i + 1;

      const imageEl = $(el).find(".film-poster");

      obj.poster = imageEl.find("img").attr("data-src");
      obj.id = imageEl.attr("href").split("/").at(-1);

      response.push(obj);
   });
   return response;
};
