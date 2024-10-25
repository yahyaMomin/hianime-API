import { load } from "cheerio";

export const extractRelated = (html) => {
   const $ = load(html);
   const response = [];
   $(".block_area.block_area_sidebar .cbox.cbox-list .ulclear li").each((i, el) => {
      const obj = {
         title: null,
         alternativeTitle: null,
         id: null,
         poster: null,
         type: null,
         episodes: {
            sub: null,
            dub: null,
            eps: null,
         },
      };

      const titleEl = $(el).find(".film-name .dynamic-name");
      obj.title = titleEl.attr("title");
      obj.alternativeTitle = titleEl.attr("data-jname");
      obj.id = titleEl.attr("href").split("/").pop();

      const infor = $(el).find(".fd-infor .tick");

      obj.type = infor
         .contents()
         .filter((i, el) => {
            return el.type === "text" && $(el).text().trim() !== "";
         })
         .text()
         .trim();

      obj.episodes.sub = Number(infor.find(".tick-sub").text());
      obj.episodes.dub = Number(infor.find(".tick-dub").text());

      const epsEl = infor.find(".tick-eps").length
         ? infor.find(".tick-eps").text()
         : infor.find(".tick-sub").text();

      obj.episodes.eps = Number(epsEl);

      obj.poster = $(el).find(".film-poster .film-poster-img").attr("data-src");

      response.push(obj);
   });
   return response;
};
