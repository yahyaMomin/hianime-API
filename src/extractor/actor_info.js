import { load } from "cheerio";

export const extractActor = (html) => {
   const $ = load(html);

   const obj = {
      name: null,
      japanese: null,
      imageUrl: null,
      bio: null,
      voiceActingRoles: [],
   };

   obj.imageUrl = $(".actor-page-wrap .avatar img").attr("src");
   obj.name = $(".actor-page-wrap .name").text();
   obj.japanese = $(".actor-page-wrap .sub-name").text();

   obj.bio = $(".tab-content #bio .bio").html().trim();

   $("#voice .bac-list-wrap .bac-item").each((i, el) => {
      const animeInfo = $(el).find(".per-info.anime-info");
      const characterInfo = $(el).find(".per-info.rtl");

      const innerObj = {
         anime: {
            title: null,
            poster: null,
            id: null,
            typeAndYear: null,
         },
         character: {
            name: null,
            imageUrl: null,
            id: null,
            role: null,
         },
      };

      innerObj.anime.title = animeInfo.find(".pi-name a").text().trim();
      innerObj.anime.id = animeInfo.find(".pi-name a").attr("href").split("/").pop();
      innerObj.anime.poster = animeInfo.find(".pi-avatar img").attr("src");
      innerObj.anime.typeAndYear = animeInfo.find(".pi-cast").text().trim();

      innerObj.character.name = characterInfo.find(".pi-name a").text().trim();
      innerObj.character.id = characterInfo.find(".pi-name a").attr("href").split("/").pop();
      innerObj.character.imageUrl = characterInfo.find(".pi-avatar img").attr("src");
      innerObj.character.role = characterInfo.find(".pi-cast").text().trim();

      obj.voiceActingRoles.push(innerObj);
   });

   return obj;
};
