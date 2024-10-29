import { fetchFromApi, fetchSources, interceptor } from "../axiosInstances/interceptor.js";
import { extractListPage } from "../extractor/list_page.js";
import { extractHomePage } from "../extractor/home_page.js";
import { extractInfoPage } from "../extractor/info_page.js";
import { setResponse, setError } from "../helper/response.js";
import { extractEpisodes } from "../extractor/episode_page.js";
import { extractServers } from "../extractor/servers.js";
import { extractSource } from "../extractor/episode_sources.js";
import { extractRecommendation } from "../extractor/recommendation.js";
import { extractCharacters } from "../extractor/characters.js";
import { extractRelated } from "../extractor/related.js";
import { extractCharacterInfo } from "../extractor/character_info.js";
import { extractActor } from "../extractor/actor_info.js";
import apiDocumentation from "../utils/documentation.js";
import { extractEpisodesInChunks } from "../extractor/extractEpisodes.js";

export const home = async (c) => {
   try {
      return c.json(apiDocumentation);
   } catch (error) {
      console.log(error.message);
      return setError(c, 500, "something went wrong");
   }
};
export const getHomePage = async (c) => {
   try {
      const obj = await interceptor("/home");

      if (!obj.status) {
         return setError(c, 400, "make sure given endpoint is correct");
      }

      const response = extractHomePage(obj.data);

      return setResponse(c, 200, response);
   } catch (error) {
      console.log(error.message);

      return setError(c, 500, "something went wrong");
   }
};

export const getInfo = async (c) => {
   try {
      const id = c.req.param("id");
      console.log(id);
      const obj = await interceptor(`/${id}`);
      if (!obj.status) {
         return setError(c, 400, "make sure given endpoint is correct");
      }
      const response = extractInfoPage(obj.data);

      return setResponse(c, 200, response);
   } catch (error) {
      console.log(error.message);

      return setError(c, 500, "something went wrong");
   }
};

export const getRecommendation = async (c) => {
   try {
      const id = c.req.param("id");

      if (!id) return setError(c, 404, "id is required");

      const obj = await interceptor(`/${id}`);
      if (!obj.status) {
         return setError(c, 400, "make sure given endpoint is correct");
      }
      const response = extractRecommendation(obj.data);

      if (response.length < 1) return setError(c, 404, "page not found");
      return setResponse(c, 200, response);
   } catch (error) {
      console.log(error.message);
      return setError(c, 500, "something went wrong");
   }
};
export const getCharacters = async (c) => {
   try {
      const id = c.req.param("id");
      const page = c.req.query("page") || 1;

      if (!id) return setError(c, 404, "id is required");

      const idNum = id.split("-").pop();
      const endpoint = `/ajax/character/list/${idNum}?page=${page}`;
      const obj = await fetchFromApi(id, endpoint);
      if (!obj.status) {
         return setError(c, 400, "make sure given endpoint is correct");
      }

      const response = extractCharacters(obj.data);

      if (response.length < 1) return setError(c, 404, "page not found");
      return setResponse(c, 200, response);
   } catch (error) {
      console.log(error.message);
      return setError(c, 500, "something went wrong");
   }
};
export const getCharacter_info = async (c) => {
   try {
      const id = c.req.param("id");

      if (!id) return setError(c, 404, "id is required");

      const obj = await interceptor(`/character/${id}`);
      if (!obj.status) {
         return setError(c, 400, "make sure given endpoint is correct");
      }

      const response = extractCharacterInfo(obj.data);

      if (response.length < 1) return setError(c, 404, "page not found");
      return setResponse(c, 200, response);
   } catch (error) {
      console.log(error.message);
      return setError(c, 500, "something went wrong");
   }
};
export const getActor_info = async (c) => {
   try {
      const id = c.req.param("id");

      if (!id) return setError(c, 404, "id is required");

      const obj = await interceptor(`/people/${id}`);
      if (!obj.status) {
         return setError(c, 400, "make sure given endpoint is correct");
      }

      const response = extractActor(obj.data);

      if (response.length < 1) return setError(c, 404, "page not found");
      return setResponse(c, 200, response);
   } catch (error) {
      console.log(error.message);
      return setError(c, 500, "something went wrong");
   }
};
export const getRelated = async (c) => {
   try {
      const id = c.req.param("id");

      if (!id) return setError(c, 404, "id is required");

      const obj = await interceptor(`/${id}`);
      if (!obj.status) {
         return setError(c, 400, "make sure given endpoint is correct");
      }

      const response = extractRelated(obj.data);

      return setResponse(c, 200, response);
   } catch (error) {
      console.log(error.message);
      return setError(c, 500, "something went wrong");
   }
};

export const getListPage = async (c) => {
   try {
      const validateQueries = [
         "top-airing",
         "most-popular",
         "most-favorite",
         "completed",
         "recently-added",
         "recently-updated",
         "top-upcoming",
         "genre",
         "az-list",
         "subbed-anime",
         "dubbed-anime",
         "movie",
         "tv",
         "ova",
         "ona",
         "special",
         "events",
      ];
      const query = c.req.param("query").toLowerCase() || null;

      if (!validateQueries.includes(query)) return setError(c, 404, "invalid query");

      const category = c.req.param("category") || null;
      const page = c.req.query("page") || 1;
      const endpoint = category ? `/${query}/${category}?page=${page}` : `/${query}?page=${page}`;

      const obj = await interceptor(endpoint);

      if (!obj.status) {
         return setError(c, 400, "make sure given endpoint is correct");
      }
      const response = extractListPage(obj.data);

      if (response.response.length < 1) return setError(c, 404, "page not found");
      return setResponse(c, 200, response);
   } catch (error) {
      console.log(error.message);
      return setError(c, 500, "something went wrong");
   }
};

export const getSearchPage = async (c) => {
   try {
      const keyword = c.req.query("keyword") || null;
      const page = c.req.query("page") || 1;

      if (!keyword) return setError(c, 404, "query is required");

      const noSpaceKeyword = keyword.trim().toLowerCase().replace(/\s+/g, "+");

      console.log(noSpaceKeyword);

      const endpoint = `/search?keyword=${noSpaceKeyword}&page=${page}`;
      const obj = await interceptor(endpoint);

      if (!obj.status) {
         return setError(c, 400, "make sure given endpoint is correct");
      }

      const response = extractListPage(obj.data);

      return setResponse(c, 200, response);
   } catch (error) {
      console.log(error.message);
      return setError(c, 500, "something went wrong");
   }
};

export const getEpisodes = async (c) => {
   try {
      const id = c.req.param("id");

      if (!id) return setError(c, 400, "id is required");

      const Referer = `/watch/${id}`;

      const idNum = id.split("-").at(-1);
      const obj = await fetchFromApi(Referer, `/ajax/v2/episode/list/${idNum}`);

      if (!obj.status) {
         return setError(c, 400, "make sure given endpoint is correct");
      }
      const response = extractEpisodes(obj.data);

      return setResponse(c, 200, response);
   } catch (error) {
      console.log(error.message);
      return setError(c, 500, "something went wrong");
   }
};

export const getServers = async (c) => {
   try {
      const episodeId = c.req.query("episodeId");

      if (!episodeId) return setError(c, 400, "episodeId is required");

      const episode = episodeId.split("ep=").at(-1);

      const obj = await fetchFromApi(episodeId, `/ajax/v2/episode/servers?episodeId=${episode}`);

      if (!obj.status) {
         return setError(c, 400, "make sure given endpoint is correct");
      }
      const response = extractServers(obj.data);

      return setResponse(c, 200, response);
   } catch (error) {
      console.log(error.message);
      return setError(c, 500, "something went wrong");
   }
};
export const getSources = async (c) => {
   try {
      const { episodeId, server = 4, audio = "sub" } = c.req.query();

      console.log(episodeId, server, audio);

      const validServerIndexes = [4, 1];

      const integerIndex = Number(server);

      if (!validServerIndexes.includes(integerIndex)) return setError(c, 400, "invalid server");

      if (!episodeId) return setError(c, 400, "episodeId is required");

      const episode = episodeId.includes("ep=");
      if (!episode) return setError(c, 400, "episode  is required");
      const serverIdsHTML = await fetchFromApi(
         episodeId,
         `/ajax/v2/episode/servers?episodeId=${episodeId.split("ep=").at(-1)}`
      );

      const serverIds = extractServers(serverIdsHTML.data);

      const selectedServer = serverIds[audio].find((el) => el.index === integerIndex);

      const obj = await fetchSources(episodeId, `/ajax/v2/episode/sources?id=${selectedServer.id}`);

      if (!obj.status) {
         return setError(c, 400, "make sure given endpoint is correct");
      }

      const params = {
         data: obj.data,
         audio,
         episodeId,
         server,
      };
      const response = await extractSource(params);
      return setResponse(c, 200, response);
   } catch (error) {
      console.log(error.message);
      return setError(c, 500, "something went wrong");
   }
};

export const getEpisodesInChunks = async (c) => {
   try {
      const id = c.req.param("id");
      if (!id) return setError(c, 400, "id is required");

      const obj = await interceptor(`/${id}`);
      if (!obj.status) return setError(c, 400, "make sure the id is correct");

      const response = await extractEpisodesInChunks(obj.data);

      if (!response.status)
         return setError(c, 400, "some thing went wrong while fetching chunks episodes");
      return setResponse(c, 200, response.data);
   } catch (error) {
      console.log(error.message);
      return setError(c, 500, "something went wrong");
   }
};
