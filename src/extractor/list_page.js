import { load } from "cheerio";

export const extractListPage = (html) => {
   const $ = load(html);

   const response = [];
   $(".block_area-content.block_area-list.film_list .film_list-wrap .flw-item").each((i, el) => {
      const obj = {
         title: null,
         alternativeTitle: null,
         id: null,
         poster: null,
         episodes: {
            sub: null,
            dub: null,
            eps: null,
         },
         type: null,
         duration: null,
      };

      obj.poster = $(el).find(".film-poster .film-poster-img").attr("data-src");
      obj.episodes.sub = Number($(el).find(".film-poster .tick .tick-sub").text());
      obj.episodes.dub = Number($(el).find(".film-poster .tick .tick-dub").text());

      const epsEl = $(el).find(".film-poster .tick .tick-eps").length
         ? $(el).find(".film-poster .tick .tick-eps").text()
         : $(el).find(".film-poster .tick .tick-sub").text();
      obj.episodes.eps = Number(epsEl);

      const titleEL = $(el).find(".film-detail .film-name .dynamic-name");

      obj.title = titleEL.text();
      obj.alternativeTitle = titleEL.attr("data-jname");
      obj.id = titleEL.attr("href").split("/").at(-1);

      obj.type = $(el).find(".fd-infor .fdi-item").first().text();
      obj.duration = $(el).find(".fd-infor .fdi-duration").text();

      response.push(obj);
   });

   const paginationEl = $(".pre-pagination .pagination .page-item");
   const currentPage = Number(paginationEl.find(".active .page-link").text());
   const hasNextPage = !paginationEl.last().hasClass("active");
   const totalPages = hasNextPage
      ? Number(paginationEl.last().find(".page-link").attr("href").split("page=").at(-1))
      : Number(paginationEl.last().find(".page-link").text());

   const pageInfo = {
      totalPages,
      currentPage,
      hasNextPage,
   };
   return { pageInfo, response };
};
