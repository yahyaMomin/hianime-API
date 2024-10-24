import { load } from "cheerio";

export const extractInfoPage = (html) => {
   const $ = load(html);

   const obj = {
      title: null,
      alternativeTitle: null,
      japanese: null,
      id: null,
      poster: null,
      rating: null,
      type: null,
      episodes: {
         sub: null,
         dub: null,
         eps: null,
      },
      synopsis: null,
      synonyms: null,
      aired: {
         from: null,
         to: null,
      },
      premiered: null,
      duration: null,
      status: null,
      MAL_score: null,
      genres: [],
      studios: null,
      producers: [],
   };

   const main = $("#ani_detail .anis-content");

   obj.poster = main.find(".film-poster .film-poster-img").attr("src");

   const titleEl = main.find(".anisc-detail .film-name");
   obj.title = titleEl.text();
   obj.alternativeTitle = titleEl.attr("data-jname");

   const info = main.find(".film-stats .tick");

   obj.rating = info.find(".tick-pg").text();
   obj.episodes.sub = Number(info.find(".tick-sub").text());
   obj.episodes.dub = Number(info.find(".tick-dub").text());
   obj.episodes.eps = info.find(".tick-eps").length
      ? Number(info.find(".tick-eps").text())
      : Number(info.find(".tick-sub").text());

   obj.type = info.find(".item").first().text();

   obj.id = main.find(".film-buttons .btn").attr("href").split("/").at(-1);

   const moreInfo = main.find(".anisc-info-wrap .anisc-info .item");

   moreInfo.each((i, el) => {
      const name = $(el).find(".item-head").text();

      switch (name) {
         case "Overview:":
            obj.synopsis = $(el).find(".text").text().trim();
            break;
         case "Japanese:":
            obj.japanese = $(el).find(".name").text();
            break;
         case "Synonyms:":
            obj.synonyms = $(el).find(".name").text();
            break;
         case "Aired:":
            const aired = $(el).find(".name").text().split("to");
            obj.aired.from = aired[0].trim();
            obj.aired.to = aired[1].trim() === "?" ? null : aired[1].trim();
            break;
         case "Premiered:":
            obj.premiered = $(el).find(".name").text();
            break;
         case "Duration:":
            obj.duration = $(el).find(".name").text();
            break;
         case "Status:":
            obj.status = $(el).find(".name").text();
            break;
         case "MAL Score:":
            obj.MAL_score = $(el).find(".name").text();
            break;
         case "Genres:":
            obj.genres = $(el)
               .find("a")
               .map((i, genre) => $(genre).text())
               .get();
            break;
         case "Studios:":
            obj.studios = $(el).find("a").text();
            break;
         case "Producers:":
            obj.producers = $(el)
               .find("a")
               .map((i, producer) => $(producer).attr("href").split("/").at(-1))
               .get();
            break;
         default:
            break;
      }
   });

   return obj;
};

const obj = {
   title: null,
   alternativeTitle: null,
   japanese: null,
   id: null,
   poster: null,
   rating: null,
   episodes: {
      sub: null,
      dub: null,
      eps: null,
   },
   synopsis: null,
   synonyms: null,
   aired: null,
   premiered: null,
   duration: null,
   status: null,
   MAL_score: null,
   genres: [],
   studios: null,
   producers: [],
};
const data = {
   title: "One Piece",
   alternativeTitle: "One Piece",
   japanese: "ONE PIECE",
   id: "one-piece-100",
   poster:
      "https://cdn.noitatnemucod.net/thumbnail/300x400/100/bcd84731a3eda4f4a306250769675065.jpg",
   rating: "PG-13",
   episodes: {
      sub: "1122",
      dub: "1096",
      eps: "1122",
   },
   synopsis:
      'Gold Roger was known as the "Pirate King," the strongest and most infamous being to have sailed the Grand Line. The capture and execution of Roger by the World Government brought a change throughout the world. His last words before his death revealed the existence of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece—which promises an unlimited amount of riches and fame—and quite possibly the pinnacle of glory and the title of the Pirate King.\n\nEnter Monkey Luffy, a 17-year-old boy who defies your standard definition of a pirate. Rather than the popular persona of a wicked, hardened, toothless pirate ransacking villages for fun, Luffy\'s reason for being a pirate is one of pure wonder: the thought of an exciting adventure that leads him to intriguing people and ultimately, the promised treasure. Following in the footsteps of his childhood hero, Luffy and his crew travel across the Grand Line, experiencing crazy adventures, unveiling dark mysteries and battling strong enemies, all in order to reach the most coveted of all fortunes—One Piece.\n\n[Written by MAL Rewrite]',
   synonyms: "OP",
   aired: "Oct 20, 1999 to ?",
   premiered: "Fall 1999",
   duration: "24m",
   status: "Currently Airing",
   MAL_score: "8.62",
   genres: ["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Shounen", "Super Power"],
   studios: "Toei Animation",
   producers: ["fuji-tv", "tap", "shueisha", "toei-animation", "funimation", "4kids-entertainment"],
};
