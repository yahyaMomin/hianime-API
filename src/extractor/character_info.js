import { load } from "cheerio";

export const extractCharacterInfo = (html) => {
   const $ = load(html);

   const obj = {
      name: null,
      japanese: null,
      imageUrl: null,
      bio: null,
      animeAppearances: [],
      voiceActors: [],
   };

   obj.imageUrl = $(".actor-page-wrap .avatar img").attr("src");
   const allDetails = $(".apw-detail");
   obj.name = allDetails.find(".name").text();
   obj.japanese = allDetails.find(".sub-name").text();

   obj.bio = allDetails.find(".tab-content #bio .bio").html().trim();

   allDetails.find(".tab-content #animeography .anif-block-ul .ulclear li").each((i, el) => {
      const innerObj = {
         title: null,
         alternativeTitle: null,
         id: null,
         poster: null,
         role: null,
         type: null,
      };
      const titleEl = $(el).find(".dynamic-name");
      innerObj.title = titleEl.attr("title");
      innerObj.alternativeTitle = titleEl.attr("data-jname");
      innerObj.id = titleEl.attr("href").split("/").pop();

      innerObj.poster = $(el).find(".film-poster .film-poster-img").attr("src");
      innerObj.role = $(el).find(".fd-infor .fdi-item").first().text().split(" ").shift();
      innerObj.type = $(el).find(".fd-infor .fdi-item").last().text();

      obj.animeAppearances.push(innerObj);
   });

   allDetails.find("#voiactor .sub-box-list .per-info").each((i, el) => {
      const innerObj = {
         name: null,
         imageUrl: null,
         id: null,
         language: null,
      };
      innerObj.imageUrl = $(el).find(".pi-avatar img").attr("src");
      innerObj.name = $(el).find(".pi-name a").text();
      innerObj.id = $(el).find(".pi-name a").attr("href").split("/").pop();

      innerObj.language = $(el).find(".pi-cast").text();

      obj.voiceActors.push(innerObj);
   });
   return obj;
};
