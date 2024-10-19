import { interceptor } from "../../axios/interceptor";
import { extractListPage } from "../../extractor/hianime/list_page";
import { extractHomePage } from "../../extractor/hianime/home_page";
import { extractInfoPage } from "../../extractor/hianime/info_page";
import { setResponse, setError } from "../../helper/response";

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
      ];
      let query = c.req.param("query") || null;
      query = query ? query.toLowerCase() : query;

      if (!query && !validateQueries.includes(query)) return setError(c, 404, "invalid query");

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
