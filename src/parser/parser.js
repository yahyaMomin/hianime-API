import { interceptor } from "../axios/interceptor";
import { extractSpotlight, extractTrending } from "../extractor/extractor";
import { setResponse, setError } from "../helper/response";

export const getSpotlight = async (c) => {
   try {
      const obj = await interceptor("/home");

      if (!obj.status) {
         return setError(c, 400, "make sure given endpoint is correct");
      }

      const response = extractSpotlight(obj.data);

      return setResponse(c, 200, response);
   } catch (error) {
      return setError(c, 500, "something went wrong");
   }
};

export const getTrending = async (c) => {
   try {
      const obj = await interceptor("/home");

      if (!obj.status) setError(c, 400, "make sure the given endpoint is correct");
      const response = extractTrending(obj.data);

      return setResponse(c, 200, response);
   } catch (error) {
      return setError(c, 500, "something went wrong");
   }
};
